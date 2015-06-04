apt-get update
apt-get install -y nodejs nodejs-legacy npm
npm install -g pm2
cp /vagrant/etc/vagrant/pm2-test-app.js /home/vagrant/test-app.js
cp /vagrant/etc/vagrant/install-pms.sh /home/vagrant/install-pms.sh
chmod +x /home/vagrant/install-pms.sh
chown -R vagrant:vagrant /home/vagrant/
