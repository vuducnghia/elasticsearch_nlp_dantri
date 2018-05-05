
PUT /my_search
{
  "settings": {
    "index":{
      "number_of_shards":1,
      "number_of_replicas":5
    },
    "analysis": {
      "analyzer": {
        "mysearch":{
          "tokenizer":"vi_tokenizer",
          "char_filter":  [ "html_strip" ],
            "filter": ["icu_folding"]
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



