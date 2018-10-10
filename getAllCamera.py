import re
import time
import json
import urllib2
import urllib
import os
import sys
url = 'http://amos14.cse.wustl.edu/REST/images/'

def crawl(url,webcam):
	print 'Send request for Imagelist...'
	url = url+'?webcam='+webcam
	print url
	urlList = []
	time.sleep(1)
	request = urllib2.Request(url)
	response = urllib2.urlopen(request)
	rawJson = response.read()
	
	dealedJson = json.loads(rawJson)
	results = dealedJson['results']
	count = int(dealedJson['count'])
	if(count == 0):
		return 0
	else:
		page = count/500+1


	url = url+'&page='+str(page)
	print url
	time.sleep(1)
	request = urllib2.Request(url)
	response = urllib2.urlopen(request)
	rawJson =  response.read()
	results = json.loads(rawJson)['results']
	
	fileName = webcam+'.txt';
	f = open(fileName,'w')
    
	
	for item in results:
		f.write(item['timestamp'])
		f.write('$')
		f.write(item['image_url'])
		f.write('\n')
	print 'Return urlList...'
	f.close()

	return urlList

if __name__ == '__main__':
	i = int(sys.argv[1])
	
	
	while i <= sys.argv[2]:
		webcam = str(i+1)
		urlList = crawl(url,webcam)
		i=i+1
    