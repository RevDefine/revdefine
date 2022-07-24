# only run in docker ubuntu18.04
# mount the directory in to /revdefine

apt update
apt install -y curl sudo 
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install -g yarn
cd /revdefine
yarn
yarn global add @quasar/cli
quasar build
