//esquema gneral
//declaracion>entrada>procesamiento>salida





<insertor> <cout>
<int>::= <entero>
funcion::= <()>


//BNF
<nuemero entero>::=<signo opcinal><secuencia de digitos>
<signo opcional>::=+|-|<nada>
<+>::= suma
<->::= resta
<*>::= multiplicar
</>::= dividir
<secuencia de digitos>::=<digito>|<digito><secuencia>
<digitos>::=0|1|2|3|4|5|6|7|8|9
<nada>::=

//bibliotecacmath
abs(x)> "valor absoluto de x"
pow(x,y)> "valor de x elevado a la y"
sqrt(x)> "menor entero que es mayor o igual que x"
ceil(x)> "Mayor entero que es menor o igual que x"
exp(x)> "e [exponente x]"
log(x)> "Lnx (logaritmo naturalde x)"
log10(x)> "Logaritmo en base 10 de x" 
sin(x)> "seno de x"
cos(x)>"coseno de x"
tan(x)> "tangente de x "
round(x)> "redondeo al entero mas proximo"
trunc(x)> "perdida de la parte decimal[entero]"

//Operaciones con caracter (char)
isalnum(c) "tru si c es una letra O un digito"
isalpha(c) "tru si c es una letra"
islower(c) "tru si c es una letra minuscula"
isupper(c) "tru si c es una letra MAYUSCULA"
/*falso de ser contrario*/
toupper (c) "devuelve la mayuscula de c"
tolower (c) "devuelve la mnuscula de c"



// metodos de instruccion 1.

<instruccion>::= <int>
<inst>
<avanzar>
<num>::=1|2|34|5|6|7|8|9|

// funciones void lectura
<private void lectura>

// declaraciones globales

switch ""


//funcion es mathematicas

abs(x)<valor abosoluto de x>
pow (x,y) < x elevado a y
sqrt (x) raiz cuadrada de X
Ceil(x) menor entero que es mayor  o igual que X
floor(x) mayor entero que es menor o igual que x 
exp (x) e


// variables

Cantidades >>

// datos basicos

int  < nemeros enteros>
float <numeros reales>
double <numero reales>
char <caracteres>
bool <valor logico(verdadero,falso)>
string <cadeba de caracteres(biblioteca string)>
void <nada, ausencia de tipo, ausencia de dato(funciones)>

//toma de decisiones (IF/if)

if (conditions) {
    'codigo'
}









from sys * import 
def open_file(filename):
    print(filename)

def run