cd source
git pull origin main
cd ..
docker compose down
docker rmi gozem-test:old
docker tag gozem-test:latest gozem-test:old
docker build . -t gozem-test:latest
docker compose up -d
docker compose logs -f --tail 50
