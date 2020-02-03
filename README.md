# Stockfiller Cart Test:


Create a program that can be executed in the terminal called place_order. Execute the
program like this:
              place_order {supplierId} {productIds}


The arguments to the program is:

supplierId - A 6 character string
productIds - A comma separated list of 6 character string

You must store all suppliers and what products they have in their assortment. There must be
at least three suppliers each having at least three products. Each product must have at least
an ID and a name. The program must check if the combination of supplier ID and product IDs
are valid and print to standard output:

OK {productNames} where productNames is a comma separated list of product names.
FAIL {error} where error can be either NO_SUPPLIER or NO_PRODUCT.

Examples:- 

A successful execution:

place_order c3e470 14fcbd,cc3c15
> OK chicken,appleTv

Given that the supplier does not have this product in their assortment:

place_order c3e470 14fcbd,cc3c15
> FAIL NO_PRODUCT

Given that the supplier does not exist at all:

place_order c3e470 14fcbd
> FAIL NO_SUPPLIER
