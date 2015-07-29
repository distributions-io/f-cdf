options( digits = 16 )
library( jsonlite )

d1 = 4
d2 = 12
x = seq( -1, 1000, 0.5 )
y = pf( x, d1, d2 )

cat( y, sep = ",\n" )

data = list(
	d1 = d1,
	d2 = d2,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/accessor.json" )
