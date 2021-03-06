options( digits = 16 )
library( jsonlite )

d1 = 2
d2 = 3
x = c( -5, -2.5, 0, 2.5, 5 )
y = pf( x, d1, d2 )

cat( y, sep = ",\n" )

data = list(
	d1 = d1,
	d2 = d2,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/number.json" )
