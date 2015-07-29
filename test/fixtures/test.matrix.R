options( digits = 16 )
library( jsonlite )

d1 = 0.8
d2 = 1.2
x = 0:24
y = pf( x, d1, d2 )

cat( y, sep = ",\n" )

data = list(
	d1 = d1,
	d2 = d2,
	data = x,
	expected = y
)


write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/matrix.json" )
