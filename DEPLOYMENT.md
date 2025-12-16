# DARSCO Welding - Deployment Guide

## Project Overview
DARSCO Welding website - Dockerized Next.js application running on port 8002.

## Architecture
```
Internet → Nginx (Host) → Docker Container (Port 8002)
         ↑ SSL/TLS Termination
```

## Current Deployment

### Docker Container
- **Port:** 8002 (internal: 3000)
- **Location:** `/home/simbahmso/skills/darscowelding-site` or `/home/simbahmso/skills/darscowelding`
- **Start:** `docker compose up -d`

### Nginx Configuration
- **Location:** `/etc/nginx/sites-available/darscowelding.ca`
- **Domain:** darscowelding.ca, www.darscowelding.ca

### SSL Certificate
- **Provider:** Let's Encrypt
- **Auto-renewal:** ✅ Enabled (systemd timer runs twice daily)
- **Location:** `/etc/letsencrypt/live/darscowelding.ca/`

---

## Migration to New Host

### 1. Backup on Current Host

```bash
# Backup SSL certificates
sudo tar -czf darscowelding-ssl.tar.gz /etc/letsencrypt/live/darscowelding.ca /etc/letsencrypt/archive/darscowelding.ca /etc/letsencrypt/renewal/darscowelding.ca.conf

# Backup nginx config
sudo cp /etc/nginx/sites-available/darscowelding.ca ~/darscowelding.ca.nginx

# Backup Docker project
cd /home/simbahmso/skills/darscowelding-site
tar -czf ~/darscowelding-docker.tar.gz .
```

### 2. Transfer to New Host

```bash
scp darscowelding-ssl.tar.gz user@newhost:/tmp/
scp darscowelding.ca.nginx user@newhost:/tmp/
scp darscowelding-docker.tar.gz user@newhost:/tmp/
```

### 3. Setup on New Host

```bash
# Install dependencies
sudo apt update
sudo apt install nginx certbot python3-certbot-nginx docker.io docker-compose -y

# Restore SSL certificates
cd /tmp
sudo tar -xzf darscowelding-ssl.tar.gz -C /

# Restore nginx config
sudo cp darscowelding.ca.nginx /etc/nginx/sites-available/darscowelding.ca
sudo ln -s /etc/nginx/sites-available/darscowelding.ca /etc/nginx/sites-enabled/

# Test and reload nginx
sudo nginx -t
sudo systemctl reload nginx

# Restore Docker project
mkdir -p ~/projects/darscowelding
cd ~/projects/darscowelding
tar -xzf /tmp/darscowelding-docker.tar.gz

# Start Docker container
docker compose up -d
```

### 4. Verify Deployment

```bash
# Check Docker container
docker ps | grep darscowelding

# Check nginx
curl -I https://darscowelding.ca

# Test SSL renewal (dry-run)
sudo certbot renew --dry-run --cert-name darscowelding.ca
```

---

## SSL Auto-Renewal

### How It Works
- **Frequency:** Checks twice daily (systemd timer: `certbot.timer`)
- **Renewal Trigger:** Certificates within 30 days of expiration
- **Method:** Nginx authenticator (automatic)

### Verify Auto-Renewal

```bash
# Check certbot timer
systemctl status certbot.timer

# Test renewal
sudo certbot renew --dry-run

# View configuration
cat /etc/letsencrypt/renewal/darscowelding.ca.conf
```

---

## Important Files

| File | Location | Purpose |
|------|----------|---------|
| Docker Compose | `/home/simbahmso/skills/darscowelding-site/docker-compose.yml` | Container configuration |
| Nginx Config | `/etc/nginx/sites-available/darscowelding.ca` | Reverse proxy + SSL |
| SSL Certificate | `/etc/letsencrypt/live/darscowelding.ca/` | HTTPS encryption |
| Certbot Config | `/etc/letsencrypt/renewal/darscowelding.ca.conf` | Auto-renewal settings |

---

## Quick Commands

```bash
# Restart container
docker compose restart

# Rebuild and restart
docker compose down && docker compose up -d --build

# View container logs
docker logs -f darscowelding

# Reload nginx
sudo systemctl reload nginx

# Test SSL renewal
sudo certbot renew --dry-run --cert-name darscowelding.ca
```

---

**Last Updated:** December 16, 2024  
**Port:** 8002  
**Domain:** darscowelding.ca
