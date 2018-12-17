# vntokenizer
PUT /my_search
{
  "settings": {
    "index":{
      "number_of_shards":1,
      "number_of_replicas":1
    },
    "analysis": {
      "analyzer": {
        "mysearch":{
          "tokenizer":"vi_tokenizer",
          "char_filter":  [ "html_strip" ], // html_strip loại bỏ các thẻ tag và ký tự đặc biệt
          "filter": ["icu_folding"]   // icu_folding đưa từ về dạng không dấu
        }
      }
    }
  }
}

PUT my_search/_mapping/my_type
{
  "properties": {
    "title":{
      "type": "text",
      "analyzer": "mysearch"
    },
    "content":{
      "type": "text",
      "analyzer": "mysearch"
    },
    "url":{
      "type": "keyword"
    }
  }
}

curl -H "Content-Type: application/json" -XPOST "localhost:9200/my_search/my_type/_bulk?pretty" --data-binary "@elasimport0.json"



#  no vntokenizer

PUT /my_search_en
{
  "settings": {
    "index":{
      "number_of_shards":1,
      "number_of_replicas":5
    }
  }
}

PUT my_search_en/_mapping/my_type
{
  "properties": {
    "title":{
      "type": "text"
    },
    "content":{
      "type": "text"
    },
    "url":{
      "type": "keyword"
    }
  }
}


curl -H "Content-Type: application/json" -XPOST "localhost:9200/my_search_en/my_type/_bulk?pretty" --data-binary "@elasimport0.json"

# example

curl -X GET "localhost:9200/_analyze" -H 'Content-Type: application/json' -d'
{
  "tokenizer" : "vi_tokenizer",
  "filter" : ["icu_folding"],
  "text" : "đại học Bách Khoa Hà Nội"    
}
'
