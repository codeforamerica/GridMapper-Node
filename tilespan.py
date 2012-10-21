import os
from urllib2 import Request, urlopen, URLError, HTTPError

# http://tile.stamen.com/terrain/11/546-550/824-827.jpg

os.mkdir('11')
for x in range(546, 551):
	os.mkdir('11/' + str(x))
	for y in range(824, 828):
		tile = urlopen('http://tile.stamen.com/terrain/11/' + str(x) + '/' + str(y) + '.jpg')
		localtile = open('11/' + str(x) + '/' + str(y) + '.jpg', 'w')
		localtile.write(tile.read())
		localtile.close()

# http://tile.stamen.com/terrain/12/1092-1099/1649-1654.jpg
print "12"
os.mkdir('12')
for x in range(1092, 1100):
	os.mkdir('12/' + str(x))
	for y in range(1649, 1655):
		tile = urlopen('http://tile.stamen.com/terrain/12/' + str(x) + '/' + str(y) + '.jpg')
		localtile = open('12/' + str(x) + '/' + str(y) + '.jpg', 'w')
		localtile.write(tile.read())
		localtile.close()

# http://tile.stamen.com/terrain/13/2185-2198/3299-3309.jpg
print "13"
os.mkdir('13')
for x in range(2185, 2199):
	os.mkdir('13/' + str(x))
	for y in range(3299, 3310):
		tile = urlopen('http://tile.stamen.com/terrain/13/' + str(x) + '/' + str(y) + '.jpg')
		localtile = open('13/' + str(x) + '/' + str(y) + '.jpg', 'w')
		localtile.write(tile.read())
		localtile.close()

# http://tile.stamen.com/terrain/14/4372-4394/6599-6617.jpg
print "14"
os.mkdir('14')
for x in range(4372, 4395):
	os.mkdir('14/' + str(x))
	for y in range(6599, 6618):
		tile = urlopen('http://tile.stamen.com/terrain/14/' + str(x) + '/' + str(y) + '.jpg')
		localtile = open('14/' + str(x) + '/' + str(y) + '.jpg', 'w')
		localtile.write(tile.read())
		localtile.close()