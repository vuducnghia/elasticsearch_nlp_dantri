# elasticsearch_nlp_dantri

# cd /usr/share/elasticsearch/bin/
# bin/elasticsearch-plugin install analysis-icu
# download 
elasticsearch-analysis-vietnamese-5.4.1.zip
#
./elasticsearch-plugin install file:///home/nghia/elasticsearch-analysis-vietnamese-5.4.1.zip

# restart
sudo service elasticsearch restart

#config elasticsearch

edit `sudo nano /etc/elasticsearch/elasticsearch.yml`

http.cors.enabled : true
 
http.cors.allow-origin : "*"
http.cors.allow-methods : OPTIONS, HEAD, GET, POST, PUT, DELETE
http.cors.allow-headers : X-Requested-With,X-Auth-Token,Content-Type, Content-Length