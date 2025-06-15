// EDHEC Mathematics Exams - Full Text Content (2000-2010)
// École de Hautes Études Commerciales du Nord

export const edhec_2001_exam = `
ECOLE DE HAUTES ETUDES COMMERCIALES DU NORD
Concours d'admission sur classes préparatoires

MATHEMATIQUES
Option scientifique
Mardi 15 mai 2001, de 8h à 12h

La présentation, la lisibilité, l'orthographe, la qualité de la rédaction, la clarté et la précision des raisonnements entreront pour une part importante dans l'appréciation des copies.
Les candidats sont invités à encadrer, dans la mesure du possible, les résultats de leurs calculs.
Ils ne doivent faire usage d'aucun document ; seule l'utilisation d'une règle graduée est autorisée.
L'utilisation de toute calculatrice et de tout matériel électronique est interdite.

Exercice 1
On rappelle que l'ensemble C2 (R, Ii?) des fonctions numériques définies et de classe C 2 sur R muni des lois habituelles, possède une structure d'espace vectoriel sur IR 
On note E l'ensemble des fonctions 9 de C2 (R, R) qui vérifient la relation (*) suivante : VXElR, q"(X) = (1 +x2) q(x). 
1) Montrer que E est un espace vectoriel sur IR. 
2) Montrer que si u et v sont deux éléments de E, alors U'V - v 'U est une fonction constante. 
3) Soit f la fonction définie, pour tout réel x, par : f(x) = e^(x2/2). 
a. Vérifier que f est élément de E. 
b. Soit g la fonction définie par : YxEIR, g(x) = f(x) ∫[0 to x] dt/(f(t))^2. Montrer que g est élément de E 
4) a. Soit h une solution de (*). Montrer, en utilisant le résultat de la deuxième question appliqué aux fonctions h et f, que h est combinaison linéaire def et de g. 
b. Montrer finalement que (f, g) est une base de E.

Exercice 2 
Pour tout entier naturel n supérieur ou égal à 1, on pose un = ∑[k=1 to n] 1/k2. 
On se propose de montrer que la série de terme général un converge et de calculer sa somme. 
On pose, pour tout entier n supérieur ou égal à 1 : vn = ∑[k=1 to n] 1/k et wn = vn - ln(n). 
On rappelle que : vn ~ ln(n) quand n→∞
1) a. Montrer que : ∀n∈ IN*, wn - wn+1 ≥ 0. 
b. Déterminer le développement limité à l'ordre 2, au voisinage de 0, de ln(1 +x) - x/(1+x). 
c. En déduire que, au voisinage de +∞ : wn - wn+1 = 1/(2n2) + o(1/n2). 
2) a. Montrer que la série de terme général (wn - wn+1) est convergente. 
b. En déduire que la suite (wn) converge. On note y sa limite. 
3) Montrer que la série de terme général un converge. 
4) a. Déterminer les réels a, b et c tels que pour tout n de IN*, un = a/n + b/(n+1) + c/(2n+1). 
b. Montrer que : ∀n∈IN*, ∑[k=1 to n] 1/(2k+1) = v2n+1 - (1/2)vn - 1. 
c. En déduire que : ∀n∈IN*, ∑[k=1 to n] uk = 24(vn - v2n+1) + 24 - 6n/(n+1). 
5) En utilisant la convergence de la suite (wn), calculer ∑[n=1 to ∞] un en fonction de ln2.

Exercice 3
On considère l'espace euclidien IR3, muni du produit scalaire noté ( . / . ) défini par : 
∀u = (x, y, z)∈ lR3, ∀u' = (x',y',z')∈1R3,(u|u')=xx'+yy'+zz'. 
La norme du vecteur u est alors définie par || u ||= √(u|u) . 
On note GI = (e1, e2, e3) la base canonique de IRE et on rappelle que Q est orthonormale pour le produit scalaire défini ci-dessus. 
On désigne par a, b et c trois réels, on pose w = (a, b, c) et on suppose que c est non nul. 
On note φ l'endomorphisme de lR3 qui à tout vecteur u = (x, y, z) de R3 associe le vecteur φ(u)=(yc-zb, za-xc, xb-ya).

1) Écrire la matrice M de φ dans la base B 
2) a. Vérifier que w appartient à Kerφ. 
b. Montrer que (φ(e1), φ(e2)) est une famille libre. 
c. Déduire des questions précédentes que Kerφ = vect(w). 
3) a. Montrer que pour tout vecteur u de W3, (φ(u) / w) = 0. 
b. En déduire que : Im φ = (Ker φ)⊥. 
4) a. Justifier que pour tout vecteur u de lR3, il existe un unique couple (u1, u2) élément de Kerφ×Imφ, tel que u=u1+u2. 
b. Montrer que (u / w) = (u1 / w). 
c. En déduire que u1 = (u|w)/||w||^2 w, puis déterminer u2 en fonction de u et w. 
5)a. Montrer que φ^3 = -||w||^2 φ. 
b. En déduire que : ∀v∈Im φ, φ o φ(v) = - || w || 2v. 
c. Montrer finalement que : ∀u∈lR3, φ o φ(u) = - || w || 2 u + (u |w) w.

Problème
On désigne par n et r deux entiers naturels vérifiant : n ≥ 2 et r ≥ 3. 
On considère une épreuve aléatoire pouvant aboutir à r résultats différents R 1, R 2, . . . . R r de probabilités respectives x1, x2, . . . . xr. On admet que, pour tout i de { 1, r }, 0 < xi < 1. 
On effectue n épreuves indépendantes du type de celle décrite ci-dessus. 
Pour tout i de { 1, r }, on note Xi la variable aléatoire qui vaut 1 si le résultat numéro i n'est pas obtenu à l'issue de ces n épreuves et qui vaut 0 sinon. 
On désigne par X la variable aléatoire égale au nombre de résultats qui n'ont pas été obtenus à l'issue des n épreuves. 
1) a. Exprimer la variable X en fonction des variables X1, X2, . . . . Xr. 
b. Donner la loi de Xi pour tout i de {1,2, . . . . r}. 
c. En déduire que l'espérance deX est E(X) = ∑[i=1 to r] (1 - xi)^n . 

La suite de cet exercice consiste à rechercher les valeurs des réels xi en lesquelles E(X) admet un minimum local. 
2) a. Donner la valeur de x1 + x2 +... + xr puis écrire E(X) comme une fonction, que l'on noteraf; des (r-1) variables x1, . . . . xr-1. 
La fonction f est donc définie sur l'ouvert (] 0, 1 [ )^(r-1) de lRr-1. 
b. Montrer que f est de classe C2 sur (] 0, 1 [ )^(r-1).

3) a. Déterminer les dérivées partielles d'ordre 1 de f. 
b. Montrer que le seul point de IR^(r-1) en lequel les dérivées partielles d'ordre 1 de f s'annulent simultanément est le point R = (1/r, 1/r, ..., 1/r). 
4) Déterminer la matrice M, élément de Mr-1(R), dont l'élément situé à l'intersection de la ligne i et de la colonne j est (∂²f/∂xi∂xj)(R). 
5) On pose A = I +J , où I est la matrice unité de Mr-1(R) et J la matrice de Mr-1(R) dont tous les éléments sont égaux à 1. 
a. Montrer que J est diagonalisable. 
b. Exprimer J2 en fonction de J et r. En déduire que les valeurs propres de J sont 0 et r - 1. 
c. Montrer que le sous-espace propre de J associé à la valeur propre r-1 est de dimension 1. 
d. Utiliser une base de Mr-1(IR) formée de vecteurs propres de J pour montrer que A est diagonalisable et qu'il existe une matrice P d'inverse tP, telle que A = P D tP où D est la matrice de Mr-1(R) dont les (r-2) premiers éléments diagonaux sont égaux à 1, celui de la (r- 1)ème ligne étant égal à r. 
6) a. Déduire des questions précédentes que pour tout H non nul de Mr-1(lR), tH MH > 0. 
b. En posant tH = (h1, h2, . . . . hr-1), exprimer tH MH en fonction des réels hi et des dérivées partielles d'ordre 2 de f au point R . 
c. En déduire que f présente un minimum local au point R . 
d. Donner la valeur de E(X) correspondant à ce minimum.
`;

export const edhec_2003_exam = `
EDHEC BUSINESS SCHOOL
Lille - Nice

ECOLE DE HAUTES ETUDES COMMERCIALES DU NORD
Concours d'admission sur classes préparatoires

MATHEMATIQUES
Option scientifique
Mardi 20 mai 2003, de 8h à 12h

La présentation, la lisibilité, l'orthographe, la qualité de la rédaction, la clarté et la précision des raisonnements entreront pour une part importante dans l'appréciation des copies.
Les candidats sont invités à encadrer, dans la mesure du possible, les résultats de leurs calculs.
Ils ne doivent faire usage d'aucun document ; seule l'utilisation d'une règle graduée est autorisée.

L'utilisation de toute calculatrice et de tout matériel électronique est interdite.

Exercice 1
P désignant un polynôme de lR[X] tel que P = ∑[k=0 to m] ak X^k , on rappelle que, pour toute matrice A de M3(lR), P(A) = a0 I + a1 A + ... + am A^m, où I désigne la matrice unité de M3(lR).
On admet que, si P et Q sont deux polynômes de lR[X] et si A est une matrice de M3(lR), alors : (P Q)(A) = P(A) Q(A ).

On se propose de déterminer explicitement le terme général de la suite (un) définie par : u0 = 0, u1 = 1, u2 = 1 et la relation, valable pour tout n de lN, un+3 = 4 un+2 - 5 un+1 + 2 un.

Pour ce faire, on pose, pour tout n de lN, Xn = (un+2, un+1, un).

1) a. Écrire la matrice A de M3(lR), indépendante de n, telle que : ∀n∈lN, Xn+1 = A Xn.
b. Vérifier que (A – I)2 (A – 2 I) = 0.
2) On considère le polynôme P de lR[X] défini par P(X) = (X – 1)2 (X – 2).
a. Justifier l'existence et l'unicité d'un couple (Qn , Rn ) de lR[X] × lR2[X], tel que :
∀n∈lN, X^n = P Qn + Rn.
b. Montrer que pour tout entier naturel n, il existe des réels an, bn et cn tels que :
Rn(X) = an + bn (X – 1) + cn (X – 1)2.
c. Établir que : ∀n∈lN, an = 1, bn = n et cn = 2^n – n – 1.

3) a. Utiliser la question précédente pour écrire, pour tout n de lN, A^n comme combinaison linéaire de I , A – I et (A – I)2.
b. Pour tout n de lN, donner la troisième ligne de la matrice A^n.
4) a. Montrer que : ∀n∈lN, Xn = A^n (1, 1, 0).
b. En déduire, pour tout n de lN, un en fonction de n.

Exercice 2
Soit p un entier naturel et f une fonction continue, strictement positive, décroissante sur [p, +∞[ et telle que ∫[p to +∞] f (t) dt converge.

Pour tout entier naturel n supérieur ou égal à p, on pose Sn = ∑[k=p to n] f (k).

1) a. Utiliser la décroissance de f pour montrer que, pour tout entier naturel n supérieur ou égal à p, on a : Sn – f(p) ≤ ∫[p to n] f(t) dt.
b. En déduire que la série de terme général f(n) est convergente.

On pose désormais, pour tout entier naturel n supérieur ou égal à p, Rn = ∑[k=n+1 to +∞] f (k).

2) a. Montrer que, pour tout entier naturel n supérieur ou égal à p, on a :
∫[n to +∞] f(t) dt – f (n) ≤ Rn ≤ ∫[n to +∞] f(t) dt.
b. En déduire une condition suffisante portant sur f(n) et ∫[n to +∞] f(t) dt pour que :
Rn ~[n→+∞] ∫[n to +∞] f(t) dt.

3) Dans cette question, pour tout réel x de [2, +∞[, on pose f(x) = 1/(x (ln x)^2).
a. Montrer que cette fonction vérifie les quatre hypothèses de l'énoncé ainsi que la condition trouvée à la question 2b).
b. En déduire un équivalent, lorsque n est au voisinage de +∞, de Rn = ∑[k=n+1 to +∞] 1/(k (ln k)^2).
c. La série de terme général Rn est-elle convergente ?

Exercice 3
Pour toute matrice A de M3(lR), on note tA la matrice transposée de A et tr(A) la trace de A, c'est-à-dire la somme des éléments diagonaux de A.
On note I la matrice unité de M3(lR) et on considère la matrice J, élément de M3(lR), définie par J = (0 1 0; 0 0 1; 0 0 0).

À tout couple (A , B) de M3(lR) × M3(lR), on associe le réel < A , B >= tr(tA B).
1) Montrer que l'on définit ainsi un produit scalaire sur M3(lR).
Dans toute la suite, on se place dans l'espace euclidien M3(lR) muni de ce produit scalaire.
2) Montrer que (I, J, J2) est une famille orthogonale.
3) On note E le sous-espace vectoriel de M3(lR) engendré par (I, J, J2).
a. Déterminer une base orthonormale de E, notée (K0, K1, K2) telle que, pour tout i de {0, 1, 2}, Ki soit proportionnelle à J^i (avec bien sûr J^0 = I).
b. Soit A une matrice quelconque de M3(lR) dont le terme situé à l'intersection de la i^ème ligne et de la j^ème colonne est noté ai,j.
Pour tout i de {0, 1, 2}, déterminer < Ki , A > en fonction de certains des éléments de A.
c. On note p la projection orthogonale sur E. Exprimer p(A) en fonction de K0, K1, K2 et de certains éléments de A.
d. En déduire une base de Ker p.

Problème

Partie 1
Dans cette partie, r désigne un entier naturel et x désigne un réel de ]0, 1[.
1) Pour tout entier naturel k non nul, calculer la dérivée k^ème de la fonction f, définie sur ]0, 1[, par : f(x) = 1/((1 – x)^(r+1)).
2) Montrer que, lorsque n est au voisinage de +∞, C^r[n+r] ~ n^r/r!.
3) Montrer que lim[n→+∞] n^(r+1) x^n = 0.
4) Soit φx la fonction définie sur [0, x] par φx (t) = (x – t)/(1 – t).
Montrer que : ∀t∈[0, x], 0 ≤ φx (t) ≤ x.
5) a. Écrire la formule de Taylor entre 0 et x avec reste intégral pour la fonction f à l'ordre n.
b. En déduire que : 0 ≤ f(x) – ∑[k=0 to n] C^k[k+r] x^k ≤ (n + r + 1) C^n[n+r] x^n ∫[0 to x] dt/((1 – t)^(r+2)).
c. Montrer finalement que : ∀x∈]0, 1[, ∀r∈lN, ∑[k=0 to +∞] C^k[k+r] x^k = 1/((1 – x)^(r+1)).

Partie 2
Dans cette partie, n désigne un entier naturel non nul.
On effectue une suite d'épreuves de Bernoulli indépendantes telles que pour chacune d'entre elles, la probabilité de succès soit égale à p, avec 0 < p < 1.
On note Xn le nombre d'épreuves qu'il faut réaliser pour obtenir, pour la première fois n succès, pas forcément consécutifs (Xn est donc le numéro de l'épreuve où l'on obtient le n^ème succès). On convient que Xn = 0 si l'on n'obtient pas n succès.
1) Dans cette question seulement, on considère le cas n = 1.
a. Reconnaître la loi de X1.
b. Donner l'espérance et la variance de X1.

Dans toute la suite, on suppose que n ≥ 2.
2) a. Déterminer Xn(Ω).
b. Pour tout entier naturel k, calculer la probabilité que l'on obtienne n – 1 succès au cours des n + k – 1 premières épreuves.
c. Déduire de la question précédente que : ∀k∈lN, P ( Xn = n + k ) = C^(n-1)[n+k-1] p^n (1 – p)^k.
d. Utiliser le résultat de la partie 1 pour vérifier que ∑[k=0 to +∞] P(Xn = n + k) = 1.
En déduire P(Xn = 0).
3) a. Montrer que : ∀n∈lN*, ∀k∈lN, (n + k) C^(n-1)[n+k-1] = n C^n[n+k].
b. En utilisant le fait que, pour tout entier naturel n, ∑[k=0 to +∞] P(Xn+1 = n + 1 + k ) = 1, montrer que Xn possède une espérance et donner sa valeur en fonction de n et p.
4) a. Montrer que : ∀n ≥ 2, (n-1)/(n+k-1) C^(n-1)[n+k-1] = C^(n-2)[n+k-2].
b. Utiliser le théorème de transfert pour montrer que, pour tout entier naturel n supérieur ou égal à 2, (n-1)/(Xn – 1) possède une espérance et que E((n-1)/(Xn – 1)) = p.
5) a. Justifier que n/Xn possède une espérance (on n'en demande pas le calcul).
b. Montrer, sans calculer E(n/Xn), que E(n/Xn) > p.
6) Dans cette question, on suppose que le paramètre p est inconnu.
Pour tout n ≥ 2, on pose : Yn = (n-1)/(Xn – 1) et Zn = n/Xn.
Des deux suites (Yn)n≥2 et (Zn)n≥2 , laquelle est un estimateur sans biais de p ? On ne se préoccupera pas de l'éventuelle convergence de ces estimateurs.
`;

export const edhec_2004_exam = `
EDHEC BUSINESS SCHOOL
Lille - Nice

ECOLE DE HAUTES ETUDES COMMERCIALES DU NORD
Concours d'admission sur classes préparatoires

MATHEMATIQUES
Option scientifique
Mardi 4 mai 2004, de 8h à 12h.

La présentation, la lisibilité, l'orthographe, la qualité de la rédaction, la clarté et la précision des raisonnements entreront pour une part importante dans l'appréciation des copies.
Les candidats sont invités à encadrer, dans la mesure du possible, les résultats de leurs calculs.
Ils ne doivent faire usage d'aucun document ; seule l'utilisation d'une règle graduée est autorisée.

L'utilisation de toute calculatrice et de tout matériel électronique est interdite.

Exercice 1
Dans tout l'exercice, X est une variable aléatoire suivant la loi de Poisson de paramètre λ > 0.
1) Une première inégalité.
a. Montrer que P ( | X–λ | ≥ λ) ≤ 1/λ.
b. En déduire l'inégalité (*) : P( X ≥ 2 λ) ≤ 1/λ

2) Première amélioration de l'inégalité (*).
a. Soit Y une variable aléatoire discrète, à valeurs positives et ayant une espérance. On note
Y(Ω) = {y0, y1, ..., yn ...}. Montrer, en minorant E(Y), que : ∀a > 0, P( Y ≥ a) ≤ E(Y)/a.
b. On considère une variable aléatoire discrète Z, d'espérance nulle et de variance σ².
Montrer que, pour tout couple (a,x) de ]0, +∞[ × lR+ :
P( Z ≥ a) ≤ P((Z + x)² ≥ (a + x)²).
c. En appliquant l'inégalité obtenue en 2a) à la variable aléatoire (Z + x)², montrer que :
∀a > 0, ∀x ≥ 0, P( Z ≥ a) ≤ (σ² + x²)/((a + x)²).

d. En déduire que : ∀a > 0, P( Z ≥ a) ≤ σ²/(σ² + a²) (on pourra étudier la fonction f qui, à tout x de lR+, associe (σ² + x²)/((a + x)²) ).
e. Utiliser cette dernière inégalité pour montrer que : P( X ≥ 2 λ) ≤ 1/(λ + 1).

3) Deuxième amélioration de l'inégalité (*).
Pour tout réel t, on pose Gx (t) = ∑[k=0 to +∞] P(X = k) t^k .
a. Justifier l'existence de Gx (t) et montrer que : Gx (t) = e^(λ(t-1)).
b. Montrer que : ∀t∈[1, +∞[, ∀a > 0, P( X ≥ a) ≤ Gx (t)/t^a.
c. Déterminer le minimum sur [1, +∞[ de la fonction g : t ↦ e^(t-1)/t².
d. En déduire que : P( X ≥ 2 λ) ≤ (e/4)^λ.
4) Montrer que cette dernière amélioration est meilleure que celle obtenue à la question 2e) dès que λ prend des valeur assez grandes.

Exercice 2
1) On pose, lorsque c'est possible, f(x) = ∫[1 to +∞] dt/(1 + t + t^(x+1)). Montrer que le domaine de définition de la fonction f est ]0, +∞[.
2) Montrer que f est décroissante sur ]0, +∞[.
3) a. Justifier l'existence de la quantité g(x) définie sur ]0, +∞[ par g(x) = ∫[1 to +∞] dt/(t(1 + t^x)).
b. Pour tout x de ]0, +∞[ et pour tout t de [1, +∞[, simplifier 1/t – t^(x-1)/(1 + t^x), puis établir que :
∀x∈]0, +∞[, g(x) = ln 2/x.
c. En déduire que : ∀x∈]0, +∞[, 0 ≤ f(x) ≤ ln 2/x, puis déterminer lim[x→+∞] f(x).
4) a. Montrer que : ∀x∈]0, +∞[, 0 ≤ ln 2/x –f(x) ≤ 1/(2x + 1).
b. En déduire la limite de f(x) quand x tend vers 0⁺ ainsi qu'un équivalent de f(x) lorsque x est au voisinage de 0⁺.
5) Dresser le tableau de variation de f.

Exercice 3
On considère deux variables aléatoires X et Y, définies toutes les deux sur le même espace probabilisé (Ω, A, P), indépendantes et suivant la loi uniforme sur [0, 1]. On pose Z = X + Y.
1) a. Déterminer une densité de Z.
b. Montrer que, pour tout x de ]0, 1[, les événements (Z > 1) et (1 – x < Z ≤ 1 + x) sont indépendants.
2) On pose T = Max(X, Y ). On admet que T est une variable aléatoire définie elle aussi sur l'espace probabilisé (Ω, A, P).
a. Montrer que T est une variable à densité puis donner une densité de T.
b. En déduire que T possède une espérance E(T) et la déterminer.
c. On pose U = | X – Y | et on admet que U est une variable aléatoire définie elle aussi sur l'espace probabilisé (Ω, A, P). Montrer que U est combinaison linéaire de Z et T, puis en déduire l'espérance de U.

Problème
Dans tout le problème, la lettre n désigne un entier naturel.

Partie 1
On note En le lR-espace vectoriel des fonctions réelles de classe C^n sur [0, 1].
En particulier, E0 est le lR-espace vectoriel des fonctions réelles continues sur [0, 1].
On note N l'ensemble des fonctions f de E2 vérifiant de plus f(0) = f(1) = 0.
On considère l'application u de N dans E0 qui, à toute fonction f de N associe sa dérivée seconde, notée f''.
1) Montrer que N est un sous-espace vectoriel de E2.
2) Montrer que u est une application linéaire injective.
3) Soit g un élément de E0. Pour tout x de [0, 1], on pose G(x) = (1/2)∫[0 to x] |x – t| g(t) dt .
a. Justifier que G est élément de E1 et montrer que :
∀x∈[0, 1], G'(x) = (1/2)(∫[0 to x] g(t) dt – ∫[x to 1] g(t) dt ).
b. En déduire que G est élément de E2 et déterminer G''.
c. Pour tout x de [0, 1], on pose H(x) = G(x) + ax + b. Déterminer les réels a et b (sous forme d'intégrales) pour que H appartienne à N.
d. Déterminer u(H) puis en déduire que u est surjective.
e. Que peut-on déduire des questions 2) et 3d) ?
4) Vérifier que, pour tout x élément de [0,1] :
(u^(-1))(g)(x) = (1/2)∫[0 to 1] |x – t| g(t) dt – (1/2)∫[0 to 1] t g(t) dt – (x/2)∫[0 to 1] (1 – 2t ) g(t) dt .

Partie 2
On note Pn l'espace vectoriel des fonctions polynomiales réelles de degré inférieur ou égal à n. Pour tout entier naturel k et pour tout réel x, on pose ek(x) = x^k, avec bien sûr e0(x) = 1, et on rappelle que B = (e0, e1, ..., en) est une base de Pn.
On note Nn le sous-espace vectoriel de Pn constitué des fonctions polynomiales P de degré inférieur ou égal à n et telles que P(0) = P(1) = 0.
Pour tout entier naturel k et pour tout réel x on pose fk(x) = x^(k+1) (x – 1).
1) Montrer que (f0, f1, ..., fn-2) est une base de Nn+2.
On considère l'application linéaire v de Nn+2 dans Pn, qui, à toute fonction P de Nn+2 associie sa dérivée seconde, notée P''.
2) a. Pour tout k de { 0, 1, ..., n }, déterminer v(fk) en fonction de certains des vecteurs de B, puis en déduire la matrice A de v relativement aux bases C et B.
b. En déduire que v est un isomorphisme de Nn+2 sur Pn.
c. Simplifier, pour tout réel x et pour tout entier naturel k, la somme ∑[j=0 to k] fj (x) .
d. Justifier que le résultat de la quatrième question de la partie 1 peut s'appliquer ici, puis déterminer, en utilisant le résultat de la question 2c), la matrice A^(-1).
e. Vérifier cette dernière, dans le cas où n = 2 (les calculs devront figurer sur la copie).
3) On considère l'application w qui à tout élément P de Pn associie w(P), où w(P) est la dérivée seconde de l'application qui à tout réel x associie (x² – x) P(x).
a. Montrer que w est un endomorphisme de Pn.
b. Pour tout k de {0, 1, ..., n}, déterminer w(ek).
c. En déduire que la matrice de w dans B n'est autre que la matrice A de la question 2a).
d. L'endomorphisme w est-il diagonalisable ? Est-ce un automorphisme de Pn ?
e. Dans le cas n = 2, déterminer les sous-espaces propres de w.
`;

export const edhec_2005_exam = `
ECOLE DE HAUTES ETUDES COMMERCIALES DU NORD
Concours d'admission sur classes préparatoires

MATHEMATIQUES
Option scientifique
Vendredi 13 mai 2005 de 8h à 12h

La présentation, la lisibilité, l'orthographe, la qualité de la rédaction, la clarté et la précision des raisonnements entreront pour une part importante dans l'appréciation des copies.
Les candidats sont invités à encadrer, dans la mesure du possible, les résultats de leurs calculs.
Ils ne doivent faire usage d'aucun document ; seule l'utilisation d'une règle graduée est autorisée.

L'utilisation de toute calculatrice et de tout matériel électronique est interdite.

Exercice 1
Dans cet exercice, n est un entier naturel supérieur ou égal à 2.
On désigne par I la matrice unité de Mn(lR).
1) On note tr l'application linéaire qui à toute matrice de Mn(lR) associe sa trace, c'est-à-dire la somme de ses éléments diagonaux.
a) Montrer que Im tr = lR.
b) En déduire la dimension de Ker tr.
c) Établir que Mn(lR) = Ker tr ⊕ Vect(I).
2) Soit f l'application qui, à toute matrice M de Mn(lR) associe f(M) = M + tr(M) I,
a) Montrer que f est un endomorphisme de Mn(lR).
b) Utiliser la première question pour déterminer les valeurs propres de f. En déduire que f est un automorphisme diagonalisable de Mn(lR).
3) Soit g l'application qui, à toute matrice M de Mn(lR) associe g (M) = M + tr(M) J, où J désigne une matrice non nulle de Mn(lR) dont la trace est nulle.
On admet que g est un endomorphisme de Mn(lR).
a) Établir que le polynôme X² – 2 X + 1 est un polynôme annulateur de g.

b) Montrer que 1 est la seule valeur propre de g.
c) g est-il diagonalisable ?

Exercice 2
Pour tout réel x, on note ⌊x⌋ la partie entière de x et on rappelle que ⌊x⌋ est le seul entier vérifiant : ⌊x⌋ ≤ x < ⌊x⌋ + 1.
On considère une variable aléatoire X définie sur un espace probabilisé (Ω, A, P) et qui suit la loi exponentielle de paramètre λ (avec λ > 0). On note F sa fonction de répartition.
On pose X₁ = ⌊X⌋ , X₂ = ⌊10(X – X₁)⌋ et l'on admet que X₁ et X₂ sont des variables aléatoires définies elles aussi sur (Ω, A, P).
1) a) Déterminer X₁(Ω).
b) Pour tout k de X₁(Ω), exprimer P(X₁ = k) à l'aide de F.
c) En déduire que X₁ + 1 suit une loi géométrique dont on donnera le paramètre.
d) Déterminer E(X₁) en fonction de λ.
2) a) Déterminer X₂(Ω) et dire ce que représente X₂.
b) Justifier que, pour tout k élément de {0, 1, ..., 9}, P(X₂ = k) = ∑[i=0 to +∞] P(X₁ = i ∩ X₂ = k),
puis montrer que : ∀k ∈ {0, 1, ..., 9}, P(X₂ = k) = ∑[i=0 to +∞] (F(i + (k+1)/10) – F(i + k/10)).
En déduire que ∀k ∈ {0, 1, ..., 9}, P(X₂ = k) = e^(λk/10) (1-e^(-λ/10))/(1-e^(-λ)).
3) Montrer que X₁ et X₂ sont indépendantes.

Exercice 3
Dans cet exercice, n est un entier naturel supérieur ou égal à 2.
On considère la fonction de n variables réelles, notée f, définie par :
∀(x₁, x₂, ..., xₙ)∈lRⁿ, f(x₁, x₂, ..., xₙ) = ∑[k=1 to n] xₖ² + (∑[k=1 to n] xₖ)² – ∑[k=1 to n] xₖ
1) a) Montrer que f est de classe C² sur lRⁿ.
b) Calculer les dérivées premières et secondes de f.
2) a) Déterminer le seul point critique (a₁, a₂, ..., aₙ) de f sur lRⁿ.
b) Vérifier que la hessienne de f en ce point est la matrice Aₙ = 2(Iₙ + Jₙ), où Iₙ désigne la matrice unité de Mₙ(lR) et Jₙ la matrice de Mₙ(lR) dont tous les éléments sont égaux à 1.
3) a) Déterminer le rang de Jₙ. En déduire que 0 est valeur propre de Jₙ et déterminer la dimension du sous-espace propre associé.
b) Calculer le produit Jₙ (1, 1, ..., 1).
c) À l'aide des questions précédentes, donner les valeurs propres de Jₙ, puis celles de Aₙ.
4) a) Montrer que, pour tout H = (h₁, h₂, ..., hₙ) non nul, on a : ᵗH AₙH > 0.
b) En déduire que f admet un minimum local en (a₁, a₂, ..., aₙ) et vérifier que ce minimum est égal à -n/(4(n+1)).

Problème
On considère deux jetons J₁ et J₂, équilibrés (c'est-à-dire tels que chaque face a une chance sur deux d'apparaître au cours d'un lancer).
Le jeton J₁ possède une face numérotée 0 et une face numérotée 1.
Le jeton J₂ possède deux faces numérotées 1.
Un joueur choisit au hasard un jeton puis effectue une série de lancers avec ce jeton.
On note E l'événement « le jeton J₁ est choisi pour le jeu » et, pour tout entier naturel k non nul, Uₖ l'événement « le k^ème lancer fait apparaître une face numérotée 1 ».

Partie 1 : étude de quelques variables aléatoires liées à cette épreuve.
1) a) Déterminer la probabilité que le joueur obtienne n fois (n∈lN*) une face portant le numéro 1 lors des n premiers lancers.
b) Dans cette question, on suppose que le joueur a obtenu n fois (n∈lN*) une face portant le numéro 1 lors des n premiers lancers. Quelle est la probabilité qu'il ait joué avec le jeton J₁ ? Quelle est la limite de cette probabilité lorsque n tend vers +∞ ? Interpréter ce résultat.

Dans la suite, on considère la variable aléatoire X égale au rang d'apparition de la première face portant le numéro 0 et on pose X = 0 si la face portant le numéro 0 n'apparaît jamais.
On considère également la variable aléatoire Y égale au rang d'apparition de la première face portant le numéro 1 et on pose Y = 0 si la face portant le numéro 1 n'apparaît jamais.
On suppose ces variables aléatoires définies sur le même espace probabilisé (Ω, A, P).
2) a) Calculer, pour tout entier naturel n non nul, la probabilité P(X = n).
b) En déduire que P(X = 0) = 1/2. Ce résultat était-il prévisible ?
c) Montrer que X a une espérance puis déterminer E(X).
d) Montrer que X(X–1) a une espérance, la déterminer puis vérifier que V(X) = 2.
3) a) Calculer, pour tout entier naturel n non nul, la probabilité P(Y = n).
b) En déduire que P(Y = 0) = 0.
c) Montrer que Y a une espérance puis déterminer E(Y).
d) Montrer que Y(Y–1) a une espérance, la déterminer puis vérifier que V(Y) = 5/4.

4) On définit sur (Ω, A, P) la variable aléatoire S par : ∀ω∈ Ω, S(ω) = Max (X(ω), Y(ω)).
a) Déterminer S(Ω).

b) Montrer que P(S = 1) = P(X = 0) = 1/2.
c) Pour tout entier n supérieur ou égal 2, comparer d'une part (X = n) et (Y < n) et d'autre part (Y = n) et (X < n), puis en déduire que : (S = n) = (X = n ∪ Y = n).
d) Reconnaître alors la loi de S et préciser son espérance et sa variance.
5) On définit sur (Ω, A, P) la variable aléatoire I par : ∀ω∈ Ω, I(ω) = Min (X(ω), Y(ω)).
a) Montrer que I est une variable de Bernoulli.
b) Déterminer P(I = 0) puis donner la loi de I, ainsi que son espérance et sa variance.

Partie 2 : simulation des variables X et Y.
On rappelle que random(2) renvoie au hasard un entier de {0, 1}.
1) On considère le programme suivant :

Program edhec2005 ;
Var jeton, lancer, X : integer ;
Begin
Randomize ;
X : = 0 ; jeton : = random(2) + 1 ;
if (jeton = 1) then begin
repeat
X : = X + 1 ;
lancer : = random(2) ;
until (lancer = 0) ;
end ;
Writeln(X) ;
end.
a) Expliquer le fonctionnement de ce programme et déterminer quel est le contenu de la variable affichée à la fin.
b) Est-on certain que le nombre de passages dans la boucle « Repeat ... until » est fini ?
2) Écrire un programme Pascal qui donne la valeur de la variable aléatoire Y.

Partie 3 : informatique.
1) Compléter les deux instructions manquantes pour que le programme Pascal suivant, dans lequel n est déclaré comme constante (ici n = 100), calcule et affiche u₀, u₁, ..., uₙ, ainsi que l'espérance de Xₙ qui sera stockée dans la variable e.

Program edhec_2006 ;
const n = 100 ;
var i, k : integer ;
s, e : real ;
u : array [0..n] of real ;
Begin
u[0] : = 1 ; writeln(u[0]) ; e : = 0 ;
For k : = 1 to n do
begin
s : = 0 ;
For j : = 1 to k do begin s : = ----- ; u[k] : = 1 – s ; end ;
Writeln(u[k]) ;
e : = ----- ;
end ;
Writeln(e) ;
end.

2) a) Compléter le programme suivant pour qu'il calcule et affiche la valeur prise par T lors de l'expérience aléatoire étudiée.
On rappelle que, si k est un entier naturel non nul, l'instruction random(k) renvoie aléatoirement un entier compris entre 0 et k–1.
Program edhec_2006bis ;
var T, hasard : integer ;
Begin
Randomize ; T : = 0 ;
Repeat T : = T + 1 ; hasard : = random (-----) ; until (hasard = -----) ;
Writeln (T) ;
end.
b) Est-on certain que le nombre de passages dans la boucle « Repeat ... until » est fini ?
`;

export const edhec_2006_exam = `
BCE BANQUE COMMUNE D'EPREUVES

Concepteur :
ECOLE DE HAUTES ETUDES COMMERCIALES DU NORD
Concours d'admission sur classes préparatoires
CODE EPREUVE : 297 EDHECMATS

MATHEMATIQUES
Option scientifique
Mardi 9 mai 2006 de 8h à 12h

La présentation, la lisibilité, l'orthographe, la qualité de la rédaction, la clarté et la précision des raisonnements entreront pour une part importante dans l'appréciation des copies.
Les candidats sont invités à encadrer, dans la mesure du possible, les résultats de leurs calculs.
Ils ne doivent faire usage d'aucun document ; seule l'utilisation d'une règle graduée est autorisée.

L'utilisation de toute calculatrice et de tout matériel électronique est interdite.

Exercice 1
Dans cet exercice, m désigne un entier naturel non nul. On note id (respectivement θ ) l'endomorphisme identité (respectivement l'endomorphisme nul) du C- espace vectoriel Cⁿ et on considère un endomorphisme f de Cⁿ vérifiant : f – λ₁ id) o (f – λ₂ id) = θ, où λ₁ et λ₂ sont deux complexes distincts.

1) a) Vérifier que 1/(λ₂ – λ₁) ( (f – λ₁ id) – (f – λ₂ id) ) = id.
b) En déduire que : Cⁿ = Ker(f – λ₁ id) ⊕ Ker(f – λ₂ id).
c) Conclure que f est diagonalisable et donner ses valeurs propres (on sera amené à étudier trois cas).
Dans la suite de l'exercice, on désigne par n un entier naturel et l'on se propose de montrer qu'il n'existe pas de matrice de M₂ₙ₊₁(lR) telle que A² = –I, où I désigne la matrice diagonale de M₂ₙ₊₁(lR) dont les éléments diagonaux valent 1.
2) Trouver une matrice A de M₂ₙ₊₁(C) telle que A² = –I.
3) Dans cette question, on suppose qu'il existe une matrice A de M₂ₙ₊₁(lR) telle que A² = –I.
a) Utiliser la première question pour montrer que A est diagonalisable dans M₂ₙ₊₁(C) et que ses valeurs propres sont i et –i.
b) Pour toute matrice M = (mᵢ,ⱼ)₁≤ᵢ≤q ₁≤ⱼ≤q de Mq,q (C), on note M̄ la matrice ( m̄ᵢ,ⱼ)₁≤ᵢ≤q ₁≤ⱼ≤q.
On note Eᵢ et E₋ᵢ les sous-espaces propres de A associés aux valeurs propres i et –i.
Montrer que X ∈ Eᵢ ⇔ X̄ ∈ E₋ᵢ.
c) En déduire que, si (u₁, u₂, ..., uₚ) est une base de Eᵢ , alors ( ū₁ , ū₂ , ..., ūₚ ) est une famille libre de E₋ᵢ. Conclure que dim Eᵢ = dim E₋ᵢ.
d) Établir enfin le résultat demandé.
`;

export const edhec_2007_exam = `
BCE BANQUE COMMUNE D'EPREUVES

ECOLE DE HAUTES ETUDES COMMERCIALES DU NORD

OPTION SCIENTIFIQUE
MATHEMATIQUES
Lundi 7 mai 2007, de 8 h. à 12 h.

La présentation, la lisibilité, l'orthographe, la qualité de la rédaction, la clarté et la précision des raisonnements entreront pour une part importante dans l'appréciation des copies.
Les candidats sont invités à encadrer dans la mesure du possible les résultats de leurs calculs.
Ils ne doivent faire usage d'aucun document ; l'utilisation de toute calculatrice et de tout matériel électronique est interdite.
Seule l'utilisation d'une règle graduée est autorisée.

Exercice 1
Pour tout n de lN*, on pose uₙ = ∫[0 to +∞] e⁻ˣ/(x + 1/n) dx.

1) Montrer que la suite (uₙ)ₙ∈lN* est bien définie.

2) Pour tout n de lN*, on pose alors vₙ = ∫[0 to 1] e⁻ˣ/(x + 1/n) dx et wₙ = ∫[1 to +∞] e⁻ˣ/(x + 1/n) dx

a) Montrer que : ∀n∈lN*, 0 ≤ wₙ ≤ 1/e.
b) Montrer que : ∀n∈lN*, vₙ ≥ (1/e) ln(n + 1).
c) Donner la limite de la suite (uₙ).
3) On se propose de déterminer un équivalent de uₙ lorsque n est au voisinage de +∞.

a) Montrer que l'intégrale I = ∫[0 to 1] (1 - e⁻ˣ)/x dx est une intégrale convergente.

b) Établir que : ∀n∈lN*, 0 ≤ ∫[0 to 1] (1 - e⁻ˣ)/(x + 1/n) dx ≤ I.

c) En déduire un encadrement de vₙ valable pour tout n de lN*.
d) Donner enfin, en utilisant cet encadrement, un équivalent simple de uₙ.

Exercice 2
On considère les matrices suivantes de M₄(lR) :
I = (1 0 0 0; 0 1 0 0; 0 0 1 0; 0 0 0 1), J = (0 -1 0 0; 1 0 0 0; 0 0 0 1; 0 0 -1 0), K = (0 0 -1 0; 0 0 0 -1; 1 0 0 0; 0 1 0 0) et L = (0 0 0 1; 0 0 -1 0; 0 1 0 0; -1 0 0 0).

On note E le lR-espace vectoriel engendré par (I, J, K, L) et Id l'endomorphisme identité de E.
On pose A = J + K.

1) Montrer que (I, J, K, L) est une base de E et donner la dimension de E.
2) a) Exprimer JK, KL et LJ en fonction respectivement de L, J et K.
b) Calculer J², K² et L² puis en déduire que : KJ = –L, LK = –J et JL = –K.
c) En déduire que E est stable pour le produit matriciel.
3) Calculer A². En déduire que A est inversible et exprimer A⁻¹ en fonction de A.
4) On considère maintenant l'application φₐ qui à toute matrice M de E associe :
φₐ(M) = AMA⁻¹.
a) Montrer que φₐ est un endomorphisme de E.
b) Déterminer Ker φₐ puis montrer que φₐ est un automorphisme de E.
5) a) Écrire la matrice Ωₐ de φₐ dans la base (I, J, K, L), puis justifier que φₐ est diagonalisable.
b) Donner les valeurs propres de φₐ ainsi que les sous-espaces propres associés.

On rappelle que l'application, notée tr, qui à toute matrice de M₄(lR) associe sa trace (c'est-à-dire la somme de ses éléments diagonaux) est une application linéaire de M₄(lR) dans lR.
On rappelle également que l'application qui à tout couple (M, N) de E × E associe le réel noté ( M / N ) défini par ( M / N ) = tr(ᵗMN) est un produit scalaire sur E.
On munit désormais E de ce produit scalaire.

6) a) Montrer que, pour tout couple (P, Q) de E × E, tr(P Q) = tr(Q P).
b) Établir alors que φₐ est un endomorphisme symétrique de E.
c) En déduire que Ker (φₐ – Id) et Ker (φₐ + Id) sont supplémentaires orthogonaux dans E.

Exercice 3
On considère une suite (Xₙ)ₙ≥₁ de variables aléatoires définies sur le même espace probabilisé (Ω, A, P), mutuellement indépendantes, et qui suivent toutes la loi exponentielle de paramètre 1.

On pose Sₙ = ∑[k=1 to n] Xₖ .

1) Rappeler quelle est la loi suivie par Sₙ. Donner l'espérance et la variance de Sₙ.

2) À l'aide du théorème de la limite centrée, établir que lim[n→+∞] P(Sₙ ≤ n) = 1/2.

3) En déduire la valeur de lim[n→+∞] ∫[0 to n] tⁿ⁻¹/(n-1)! e⁻ᵗ dt .

4) a) Utiliser le résultat précédent pour montrer que ∫[0 to 1] z^(n-1) e^(-nz) dz ~[n→+∞] n!/2nⁿ⁺¹.

b) On admet que n! ~ √(2πn)ⁿ e⁻ⁿ. En déduire un nouvel équivalent de ∫[0 to 1] z^(n-1) e^(-nz) dz .
`;

export const edhec_2008_exam = `
BCE BANQUE COMMUNE D'EPREUVES

ECOLE DE HAUTES ETUDES COMMERCIALES DU NORD
Concours d'admission sur classes préparatoires

Code sujet
MATHEMATIQUES
Option scientifique
297
EDHECMATS

Mardi 6 mai 2008 de 8h à 12h

La présentation, la lisibilité, l'orthographe, la qualité de la rédaction, la clarté et la précision des raisonnements entreront pour une part importante dans l'appréciation des copies.
Les candidats sont invités à encadrer, dans la mesure du possible, les résultats de leurs calculs.
Ils ne doivent faire usage d'aucun document ; seule l'utilisation d'une règle graduée est autorisée.

L'utilisation de toute calculatrice et de tout matériel électronique est interdite.

Exercice 1
1) On considère la matrice A = (0 -1; y 2x), élément de M₂(lR).
Déterminer une condition nécessaire et suffisante portant sur les réels x et y pour que la matrice A soit diagonalisable dans M₂(lR).
2) Dans la suite, X et Y sont des variables aléatoires réelles, définies sur le même espace probabilisé (Ω, A, P), indépendantes et qui suivent toutes les deux la loi uniforme sur [0, 1]. On note Fx (respectivement Fy) la fonction de répartition de X (respectivement Y).
a) Déterminer une densité de X² (on ne demande pas de vérifier que X² est une variable aléatoire à densité).
b) Déterminer une densité de –Y (on ne demande pas de vérifier que –Y est une variable aléatoire à densité)..
c) En déduire que la variable aléatoire X² – Y admet pour densité la fonction h définie par :

h(x) = {√(x+1) si -1 ≤ x < 0
        {1-√x si 0 ≤ x ≤ 1
        {0 sinon

On note G la fonction de répartition de X – Y.
2) a) Exprimer la fonction de répartition H de la variable aléatoire Z en fonction de G.
b) En déduire qu'une densité de Z est la fonction h définie par :
h(x) = {2(a-x)/a² si x ∈ [0, a]
        {0 sinon

3) Montrer que Z possède une espérance et une variance et les déterminer.

d) Déterminer enfin la probabilité que la matrice M = (0 -1; Y 2X) soit diagonalisable dans M₂(lR)

Exercice 2
On se propose dans cet exercice de montrer que la série de terme général uₙ = (-1)ⁿ (sin n)/n est convergente et de calculer sa somme.
1) On désigne par f une fonction de classe C¹ sur l'intervalle [a, b] et par λ un réel strictement positif. Montrer, grâce à une intégration par parties, que : lim[λ→+∞] ∫[a to b] f (t)cos(λt)dt = 0.
2) a) On rappelle que : ∀(a,b)∈lR², cos(a+b) = cos a cos b – sin a sin b.
Exprimer, pour tout réel t, cos(t/2)cos(kt) en fonction de cos((2k+1)t/2) et cos((2k-1)t/2).
b) En déduire que :
∀t∈[0, 1], ∀n∈lN*, cos(t/2) ∑[k=1 to n] (-1)ᵏ cos(k t) = (1/2)((−1)ⁿ cos((2n+1)t/2) – cos(t/2)).

c) Montrer alors que : ∀n∈lN*, ∑[k=1 to n] uₖ = (-1)ⁿ ∫[0 to 1] cos((2n+1)t/2)/(2cos(t/2)) dt – 1/2.

3) Utiliser la première question pour conclure que la série de terme général uₙ converge et que :
∑[n=1 to +∞] (-1)ⁿ (sin n)/n = -1/2.

Exercice 3
Dans cet exercice, f désigne un endomorphisme d'un lR-espace vectoriel E de dimension finie. On se propose d'étudier quelques situations dans lesquelles on peut établir que E = Ker f ⊕ Im f.

1) a) Montrer que si f est un automorphisme de E, alors on a bien E = Ker f ⊕ Im f.
b) Étude d'un exemple : on considère deux sous-espaces vectoriels supplémentaires, F et G, de E. Tout élément x de E s'écrit donc de manière unique x = xF + xG, avec xF∈F et xG∈G.
On appelle alors symétrie par rapport à F parallèlement à G l'endomorphisme s de E défini par :
s(x) = xF – xG.
Déterminer s² et en déduire que E = Ker s ⊕ Im s.

2) Dans cette question, on suppose f diagonalisable et f non bijectif (le cas où f est bijectif ayant été traité dans la première question).
a) Traiter le cas où f est l'endomorphisme nul.
b) Dans cette question, on suppose que f n'est pas l'endomorphisme nul.
(i) Montrer qu'il existe un vecteur x de E tel que y = f(x) et f²(x) = 0.
(ii) En déduire que, pour tout entier k supérieur ou égal à 2, on a f^k(x) = 0 puis déterminer y.
b) Établir que E = Ker f ⊕ Im f.

3) Dans cette question, on considère un endomorphisme f de E dont un polynôme annulateur est de la forme P = ∑[k=1 to p] aₖ X^k ou encore P = a₁X + a₂X² + ... + aₚXᵖ, avec a₁ ≠ 0 et p ≥ 1.

a) Soit y un élément de Im f ∩ Ker f.
(i) Montrer qu'il existe un vecteur x de E tel que y = f(x) et f²(x) = 0.
(ii) En déduire que, pour tout entier k supérieur ou égal à 2, on a f^k(x) = 0 puis déterminer y.
b) Établir que E = Ker f ⊕ Im f.

Problème
Dans ce problème, n est un entier naturel supérieur ou égal à 3 et p est un entier naturel.
Un jeu oppose n joueurs J₁, J₂, ...., Jₙ.
Le jeu se déroule de la façon suivante : une pièce équilibrée est lancée (2p + 1) fois. Avant les lancers, chaque joueur écrit une liste de prévisions pour ces lancers. Cette liste contient donc une suite de (2p + 1) caractères P (pour "pile") ou F (pour "face"). Les gagnants sont les joueurs ayant le plus grand nombre de prévisions correctes et ils se partagent équitablement la somme de n ! euros.
Par exemple, pour p = 1, si les lancers donnent dans cet ordre P, F, P, le joueur ayant noté (P, F, P) a 3 prévisions correctes, les lancers donnent dans cet ordre F, P, F et Y prend la valeur 2 sinon.
Pour tout i de {1, 2, ..., n}, on note Xᵢ la variable aléatoire égale au nombre de prévisions correctes du joueur Jᵢ, on note Gᵢ la variable aléatoire égale au gain du joueur Jᵢ selon deux stratégies présentées dans les parties 2 et 3.
L'objectif du problème est de déterminer l'espérance de gain du joueur J₁ selon deux stratégies présentées dans les parties 2 et 3.

Partie 1 : quelques résultats utiles pour les parties suivantes.
1) Montrer que les variables Xᵢ suivent toutes la même loi binomiale dont on donnera les paramètres.
On pose alors, pour tout i de {1, 2, ..., n} et pour tout k de Xᵢ(Ω), qₖ = P(Xᵢ = k) et rₖ = P(Xᵢ ≤ k).
2) On pose Sp = ∑[k=0 to 2p+1] (2p+1 choose k) et Tp = ∑[k=2p+1 to 2p+1] (2p+1 choose k).
a) Calculer Sp + Tp.
b) Montrer que Sp = Tp.
c) Déduire des deux résultats précédents la valeur de Sp, puis montrer que rp = 1/2.

Partie 2 : les joueurs jouent au hasard et indépendamment les uns des autres.
Dans cette partie, les variables Xᵢ sont donc mutuellement indépendantes.
1) Montrer que G₁(Ω) = {n!/(j+1), j∈[[0, n-1]] }.
2) a) Montrer que P(X₁=0) (G₁ = n!/j) = (n-1 choose j)(q₀)ʲ (r₀-1)ⁿ⁻¹⁻ʲ.
b) Montrer que, pour tout j élément de [[0, n-2]], P(X₁=k) (G₁ = n!/j+1) = 0.
c) En déduire que l'espérance de G₁ conditionnellement à l'événement (X₁ = 0) est :
E(G₁ / X₁ = 0) = (n-1)! (q₀)ⁿ⁻¹.

Partie 3 : J₁ et J₂ forment un groupe et les autres joueurs jouent comme dans la partie 2.
Dans cette partie J₁ et J₂ adoptent la stratégie suivante : J₁ joue au hasard mais J₂ joue, pour chaque lancer, pour le résultat contraire de celles de J₁. Par exemple, pour p = 1, si J₁ a choisi (P, F, P) alors J₂ choisit (F, P, F).
On note G' le gain du groupe formé par ces deux joueurs, J₁ et J₂ décidant de partager équitablement ce gain. On a donc, en désignant par G'₁ et G'₂ les gains respectifs de J₁ et J₂ :
G'₁ = G'₂ et G'₁ + G'₂ = G'.
On note Y la variable aléatoire égale au nombre de prévisions correctes du meilleur de J₁ et J₂.
1) a) Montrer qu'un et un seul des joueurs J₁ et J₂ a au moins (p+1) prévisions correctes.
b) En déduire que Y(Ω) = [[p+1, 2p+1]].
2) Vérifier que, dans l'exemple donné au début de cette partie, Y prend la valeur 3 si les lancers donnent dans cet ordre P, F, P et Y prend la valeur 2 sinon.
3) Pour tout k de [[p + 1, 2p + 1]], montrer que P(Y = k) = 2qₖ.
4) Montrer que G'(Ω) = {n!/(j+1), j∈[[0, n-2]] }.
5) a) Établir que, pour tout k non nul de X₁(Ω) et pour tout j élément de [[0, n-1]], on a :
P(Y=k) (G' = n!/j+1) = (n-2 choose j)(qₖ)ʲ (rₖ-1)ⁿ⁻²⁻ʲ.
b) Établir que 1/(j+1) (n-1 choose j) = 1/n (n choose j+1) puis en déduire que, pour tout k non nul de X₁(Ω), l'espérance de G' conditionnellement à l'événement (Y = k) est :
E(G' / Y = k) = (n-1)! (qₖ)ⁿ⁻² puis en déduire que, pour tout k non nul de X₁(Ω).
c) Vérifier que cette expression reste valable pour k = 0 en posant r₋₁ = 0.
4) Utiliser les questions 3b) et 3c) pour établir que E(G₁) = (n-1)!.
6) a) En déduire, en utilisant le résultat de la deuxième question de la partie 1, que :
E(G') = 2 n(n-2)!(1 - 1/2ⁿ⁻¹).
b) Montrer par récurrence que : ∀n∈lN, n ≥ 3, 2ⁿ⁻¹ > n.
c) Déterminer E(G'₁) et vérifier que la stratégie adoptée par les joueurs J₁ et J₂ est avantageuse pour J₁ (et donc pour J₂) du point de vue de l'espérance de leur gain.
`;

export const edhec_2010_exam = `
297
EDHECMATS
ECOLE DE HAUTES ETUDES COMMERCIALES DU NORD
Concours d'admission sur classes préparatoires

MATHEMATIQUES
Option scientifique
Vendredi 7 mai 2010 de 8h à 12h

La présentation, la lisibilité, l'orthographe, la qualité de la rédaction, la clarté et la précision des raisonnements entreront pour une part importante dans l'appréciation des copies.
Les candidats sont invités à encadrer, dans la mesure du possible, les résultats de leurs calculs.
Ils ne doivent faire usage d'aucun document ; seule l'utilisation d'une règle graduée est autorisée.

L'utilisation de toute calculatrice et de tout matériel électronique est interdite.

Exercice 1
Dans cet exercice, n désigne un entier naturel supérieur ou égal à 2.
On considère la fonction fn définie, pour tout (x1, x2, ..., xn) de l'ouvert U = ] 0, +∞[ ⁿ, par :
fn (x1, x2, ..., xn) = ( ∑[i=1 to n] xi )( ∑[i=1 to n] 1/xi ) = (x1 + x2 + ... + xn)( 1/x1 + 1/x2 + ... + 1/xn ).

1) Montrer que fn est de classe C² sur U.

2) Montrer que fn possède une infinité de points critiques (a1, a2, ..., an) et les déterminer.

3) a) Déterminer les dérivées partielles secondes de fn.
b) Vérifier que la hessienne Hn de fn en un point critique quelconque de fn est proportionnelle à la matrice Kn = n In - Jn, où In désigne la matrice unité de Mn(ℝ) et Jn la matrice de Mn(ℝ) dont tous les éléments valent 1.

4) a) Déterminer le rang de Jn. En déduire que 0 est valeur propre de Jn et déterminer la dimension du sous-espace propre associé.
b) Vérifier que le vecteur vn, élément de Mn,1(ℝ), dont tous les éléments sont égaux à 1, est un vecteur propre de Jn.
c) À l'aide des questions précédentes, donner les valeurs propres de Jn, puis celles de Kn.
d) Montrer que l'on ne peut pas, de cette façon, conclure à l'existence d'un extremum local de fn sur U.

5) Étude du cas n = 2
a) Comparer les réels (x1 + x2)² et 4 x1 x2.
b) En déduire que f2 admet sur ]0, +∞[ × ]0, +∞[ un minimum global et donner sa valeur.

6) Étude du cas général.
On considère l'espace euclidien ℝⁿ muni de son produit scalaire canonique. En appliquant l'inégalité de Cauchy-Schwarz à deux vecteurs bien choisis de ℝⁿ, montrer que fn admet un minimum global sur U, égal à n².

Exercice 2
On se place dans un espace euclidien E de dimension n, où n désigne un entier naturel supérieur ou égal à 2.
Le produit scalaire des vecteurs x et y de E est noté ( x / y ) et la norme de x est notée || x ||.
On désigne par Id l'endomorphisme identique de E.
On considère un vecteur u de E dont la norme est égale à 1, un réel λ non nul et on note fλ l'application qui, à tout vecteur x de E associe fλ(x) = λ ( x / u ) u + x.
1) Donner la dimension de (vect(u))⊥.

2) Montrer que fλ est un endomorphisme de E.

3) Montrer que le polynôme X² – (λ + 2)X + (λ + 1) est un polynôme annulateur de fλ.

4) a) Montrer que fλ est un endomorphisme symétrique de E.
b) Déterminer fλ(u) et fλ(v) pour tout vecteur v de (vect(u))⊥.
c) Établir alors que fλ possède deux valeurs propres distinctes et donner les sous-espaces propres associés à ces deux valeurs propres.

5) Dans cette question on suppose que λ = -1.
a) Vérifier que f-1 est un projecteur.
b) Montrer plus précisément que f-1 est le projecteur orthogonal sur (vect(u))⊥.

Exercice 3
Dans cet exercice, a désigne un réel strictement positif.
On considère deux variables aléatoires X et Y, définies sur un espace probabilisé (Ω, A, P), indépendantes et suivant toutes deux la loi uniforme sur [0, a[.
On pose Z = |X - Y| et on admet que -Y, X - Y et Z sont des variables aléatoires à densité, elles aussi définies sur l'espace probabilisé (Ω, A, P).

1) a) Déterminer une densité de -Y.
b) En déduire que la variable aléatoire X - Y admet pour densité la fonction g définie par :

g(x) = {(a-|x|)/a² si x ∈ [-a, a]
        {0 sinon

On note G la fonction de répartition de X - Y.
2) a) Exprimer la fonction de répartition H de la variable aléatoire Z en fonction de G.
b) En déduire qu'une densité de Z est la fonction h définie par :
h(x) = {2(a-x)/a² si x ∈ [0, a]
        {0 sinon

3) Montrer que Z possède une espérance et une variance et les déterminer.

4) Simulation informatique.
On rappelle qu'en Turbo Pascal, la fonction random permet de simuler la loi uniforme sur [0, 1[.
Compléter la déclaration de fonction suivante pour qu'elle retourne à chaque appel un nombre réel choisi selon la loi de Z.
Function z (a : real) : real ;
Var x, y : real ;
Begin
x := ------ ; y := ------ ; z := ------ ;
End ;

Problème

Préliminaire : un résultat utile pour la partie 2.
1) a) Montrer que, pour tout k de ℕ*, on a : 1/√(k+1) ≤ ∫[k to k+1] 1/√t dt ≤ 1/√k .
b) En déduire que, pour tout entier naturel n supérieur ou égal à 2, on a :
∑[k=2 to n] 1/√k ≤ ∫[1 to n] 1/√t dt ≤ ∑[k=1 to n-1] 1/√k .

2) Montrer enfin que :
∀n∈ℕ*, 2√n - 2 ≤ ∑[k=1 to n] 1/√k ≤ 2√n - 1.

Partie 1 : convergence complète.
1) Soit une suite (Xn)n≥1 de variables aléatoires définies sur un espace probabilisé (Ω, A, P ) et une variable aléatoire X, elle aussi définie sur cet espace probabilisé.
Montrer que, si la suite (Xn) converge complètement vers X, alors elle converge en probabilité vers X.

On se propose, dans la suite, d'étudier un exemple montrant que la réciproque de cette propriété est fausse.
Pour ce faire, on considère une suite (Yn)n≥1 de variables aléatoires définies sur un espace probabilisé (Ω, A, P), indépendantes et suivant toutes la loi de Poisson de paramètre 1/n

a) Déterminer la probabilité P(Yn ≥ 1).
b) Soit ε un réel strictement positif. Montrer que : ∀ε > 0, 0 ≤ P(Yn ≥ ε) ≤ 1 – e^(-1).
c) En déduire que (Yn) converge en probabilité vers la variable aléatoire certaine égale à 0.
d) Utiliser la valeur de P(Yn ≥ 1) pour en déduire que la suite (Yn) ne converge pas complètement vers la variable aléatoire certaine égale à 0.

Partie 2 : étude d'un exemple.
Dans cette partie, on considère une suite (Bk)k≥1 de variables aléatoires, toutes définies sur le même espace probabilisé (Ω, A, P ), et telles que, pour tout entier naturel k non nul, Bk suit la loi de Bernoulli de paramètre 1/√k . On suppose que les variables aléatoires Bk sont deux à deux indépendantes.

Pour tout entier naturel n non nul, on pose Sn = ∑[k=1 to n] Bk et Zn = Sn/E(Sn).

aléatoires Sn et Zn sont, elles aussi, définies sur (Ω, A, P ).
On se propose, dans les questions 1) et 2), de montrer que la suite (Zn) converge en probabilité vers la variable aléatoire certaine égale à 1 et, dans les questions suivantes, de montrer que la suite (Zn) converge complètement vers cette même variable.

1) a) Pour tout n de ℕ*, donner sous forme de sommes les expressions de E(Sn) et V(Sn).
b) Vérifier que V(Sn) ≤ E(Sn).

2) a) Montrer que P( |Zn-1| ≥ ε ) ≤ 1/(ε² E(Sn)).
b) Établir que la suite (Zn) converge en probabilité vers la variable aléatoire certaine égale à 1.

3) À l'aide de l'inégalité établie à la question 2a) de cette même partie, montrer que la série de terme général P( |Zn - 1| ≥ ε ) est convergente.

4) On désigne par εn la partie entière de n^(1/4), et on a donc : εn ≤ n^(1/4) < εn + 1 .
a) Montrer que, pour tout n de ℕ*, on a : Sεn/E(Sεn) ≤ Zn ≤ Sεn+1⁴/E(Sεn+1⁴).
b) En déduire que, pour tout n de ℕ*, on a :
E(Sεn)/E(Sn) Zεn ≤ Zn ≤ E(Sεn+1⁴)/E(Sn) Zεn+1⁴.

5) a) Établir que lim[n→+∞] E(Sεn)/E(Sn) = 1.
b) En déduire que, pour tout réel ε strictement positif et pour n assez grand, on a :
E(Sεn)/E(Sn) ≤ 1 + ε et E(Sεn+1⁴)/E(Sn) ≥ 2 + ε/(2(1 + ε)).
c) Montrer que, pour tout réel ε strictement positif et pour n assez grand, on a :
P( |Zn -1| ≥ ε ) ≤ P( |Zεn -1| ≥ ε/(2) ) + P( |Zεn+1⁴ -1| ≥ ε/(2) ).
d) En déduire alors que, pour tout réel ε strictement positif et pour n assez grand, on a :
P( |Zn -1| ≥ ε ) ≤ P( |Zεn -1| ≥ ε/(2(1 + ε)) ) + P( |Zεn+1⁴ -1| ≥ ε/(2) ).

e) Conclure qu'effectivement, la suite (Zn) converge complètement vers la variable aléatoire certaine égale à 1.
`;

export const edhec_2000_exam = `
edhec
ECOLE DE HAUTES ETUDES COMMERCIALES DU NORD
EDHEC GRADUATE SCHOOL OF MANAGEMENT

ECOLE DE HAUTES ETUDES COMMERCIALES DU NORD
Concours d'admission sur classes préparatoires

MATHEMATIQUES
Option scientifique
Mercredi 3 mai 2000, de 8h à 12h

La présentation, la lisibilité, l'orthographe, la qualité de la rédaction, la clarté et la précision des raisonnements entreront pour une part importante dans l'appréciation des copies.
Les candidats sont invités à encadrer, dans la mesure du possible, les résultats de leurs calculs.
Ils ne doivent faire usage d'aucun document ; seule l'utilisation d'une règle graduée est autorisée.

L'utilisation de toute calculatrice et de tout matériel électronique est interdite.

Exercice 1
1) La durée de vie d'un composant électronique est une variable aléatoire X de densité f strictement positive sur ℝ+ et nulle sur ℝ-. On note F la fonction de répartition de X.
a. On désigne par t et h deux réels strictement positifs. Exprimer, à l'aide de la fonction F, la probabilité p(t, h) que le composant tombe en panne avant l'instant t+ h sachant qu'il fonctionnait encore à l'instant t.
b. Établir que, lorsque h est au voisinage de 0+, p(t, h) ~ f(t)/(1 - F(t)) h.

On pose désormais, pour tout réel positif t : λx(t) = f(t)/(1 - F(t)). On a bien sûr λx(t) ≥ 0.

La fonction positive λx est appelée taux de panne du composant ou taux de panne de X.

2) Soit X une variable aléatoire qui possède une densité continue, strictement positive sur ℝ+, nulle sur ℝ- et de taux de panne λx.
a. Pour tout réel strictement positif t, calculer ∫[0 to t] λx(u) du puis montrer que la seule connaissance de la fonction "taux de panne" λx permet de déterminer la fonction de répartition F de X.
b. Déduire de la question précédente que les variables suivant des lois exponentielles possèdent un taux de panne constant et qu'elles sont les seules dans ce cas.

3) La durée de vie (en années) d'un appareil est une variable aléatoire X dont le "taux de panne" est la fonction λx définie par λx(t) = t³.
a. Quelle est la probabilité que cet appareil survive plus d'un an ?
b. Quelle est la probabilité que cet appareil, âgé de 1 an, survive plus de 2 ans ?

Exercice 2
Dans cet exercice, x désigne un réel élément de [0, 1[ et n un entier supérieur ou égal à 1.
1) a. Montrer que : ∀p∈ℕ*, 1/(p+1) ≤ ∫[p to p+1] dt/t ≤ 1/p.
b. En déduire que : ∀k∈ℕ*, 0 ≤ ∑[p=1 to k] 1/p - ln(k) ≤ 1.

2) a. Montrer que : ∑[p=1 to n] x^p/p = - ln(1-x) - ∫[0 to x] t^n/(1-t) dt.
b. En déduire que la série de terme général x^n/n converge et exprimer sa somme en fonction de x.

3) a. Pour tout x de ]0, 1[, calculer lim[n→+∞] ln(n² ln(n)x^n).
b. En déduire que, pour tout x de [0, 1[, la série de terme général ln(n)x^n est convergente.

On pose maintenant Sn(x) = ∑[k=1 to n] ln(k) x^k et S(x) = ∑[k=1 to +∞] ln(k) x^k .

4) Le but de cette question est de trouver un équivalent simple de S(x) lorsque x est au voisinage de 1-.
a. Montrer, en utilisant la première question, que :
0 ≤ ∑[k=1 to n] ∑[p=1 to k] x^k/p - Sn(x) ≤ ∑[k=1 to n] x^k.

b. En déduire que : 0 ≤ 1/(1-x) ∑[p=1 to n] x^p+1/p - Sn(x) ≤ x/(1-x).

c. Justifier que : lim[n→+∞] x^n+1/ln(1-x) = 0.

d. En déduire que : S(x) ~ -ln(1-x)/(1-x).

Exercice 3
Un sondage consiste à proposer l'affirmation « A » à certaines personnes d'une population donnée. Le sujet abordé étant délicat, le stratagème suivant est mis en place afin de mettre en confiance les personnes sondées pour qu'elles ne mentent pas...
L'enquêteur dispose d'un paquet de 20 cartes, numérotées de 1 à 20, qu'il remet à la personne sondée. Celle-ci tire une carte au hasard et ne la montre pas à l'enquêteur.
La règle est alors la suivante :
• si la carte porte le numéro 1 , la personne sondée répond "vrai" si elle est d'accord avec l'affirmation « A » et "faux" sinon.
• si la carte porte un autre numéro, la personne sondée répond "vrai" si elle n'est pas d'accord avec l'affirmation A » et "faux" sinon.
Le but de l'enquête est d'évaluer la proportion p de gens de cette population qui sont réellement d'accord avec l'affirmation « A ».

1) En utilisant la formule des probabilités totales, exprimer θ en fonction de p, puis en déduire p en fonction de θ.

2) Certaines considérations théoriques laissent penser que p = 17/18.
a. Vérifier que θ = 1/10.
b. Calculer la probabilité pour qu'une personne ayant répondu "vrai" soit d'accord avec l'affirmation « A ».

On revient au cas général où l'on ne connaît ni p, ni θ.
3) On considère un échantillon aléatoire, de taille n, extrait de la population considérée et on note Sn le nombre de réponses "vrai" obtenues. On suppose n assez grand pour pouvoir considérer que cet échantillonnage est assimilable à un tirage avec remise.
a. Donner la loi de Sn ainsi que son espérance et sa variance.
b. Montrer que Sn/n est un estimateur sans biais et convergent de θ.

4) Dans cette question, on suppose que l'on a réalisé un échantillon de 100 personnes et on constate que 23 personnes ont répondu "vrai".
a. Donner une estimation ponctuelle de θ et de p.
b. Donner un intervalle de confiance à 95 % de θ puis de p.

On rappelle que, si Φ désigne la fonction de répartition d'une variable X suivant la loi normale N(0, 1), alors Φ(1,96) = 0,975.

Problème
On considère l'espace euclidien ℝ³, muni du produit scalaire noté ( . / . ) défini par :
∀u=(x,y,z)∈ℝ³, ∀u'=(x',y',z')∈ℝ³,(u|u')=xx'+yy'+zz'.
La norme du vecteur u est alors définie par || u ||= √(u|u) .
On note Ⴓ = (e1, e2, e3) la base canonique de ℝ³ et on rappelle que Ⴓ est orthonormée pour le produit scalaire défini ci-dessus.

Le but de ce problème est de montrer que l'on peut trouver une famille de cardinal maximal, F = (u1,u2, ..., un) formée de n vecteurs unitaires et deux à deux distincts de ℝ³ ainsi qu' un réel a tels que : pour tout couple d'entiers (i,j) vérifiant 1 ≤ i < j ≤ n, on ait : (ui / uj) = a.

La partie 1 permet d'obtenir un résultat d'algèbre linéaire utile pour la suite, la partie 2 étudie les propriétés d'une telle famille et la partie 3 propose la construction d'une famille solution du problème pour n = 4 (cette valeur est d'ailleurs la valeur maximale possible de n mais ce résultat ne sera pas démontré dans ce problème).

Partie 1
Dans cette partie, n est un entier naturel supérieur ou égal à 2.
Pour tout réel a, on note Ma la matrice de Mn(ℝ) dont les éléments diagonaux sont tous égaux à 1, les autres éléments étant égaux à a. On note I la matrice unité de Mn(ℝ) et J la matrice de Mn(ℝ) dont tous les coefficients valent 1.
1) a. J est-elle diagonalisable ?
b. Calculer J² et en déduire les 2 valeurs propres de J.
2) a. Utiliser une base de Mn-1(ℝ) formée de vecteurs propres de J pour déterminer les deux valeurs propres de Ma.
b. En déduire que Ma est inversible si et seulement si : a ≠ 1 et a ≠ -1/(n-1).

Partie 2
On suppose que l'on a trouvé une famille (u1,u2, ..., un) formée de n vecteurs de ℝ³, unitaires et deux à deux distincts, et un réel a solutions du problème.

1) Soit λ1, λ2, ..., λn des réels tels que ∑[k=1 to n] λk uk = 0.
a. Écrire l'inégalité de Cauchy-Schwarz pour les vecteurs ui et uj (avec i ≠ j).
b. En déduire que n = 1.
À quelle condition a-t-on l'égalité ?
2) Étude du cas a = 1.

a. Montrer que Ma (λ1, λ2, ..., λn) = 0.

b. En déduire la valeur maximale de n lorsque a ≠ 1 et a ≠ -1/(n-1).

3) Dans cette question, on admet qu'il existe une famille (u1, u2,u3,u4), formée de 4 vecteurs de ℝ³, unitaires et deux à deux distincts, solution du problème.
a. Donner la valeur de a.
b. Montrer que (u1,u2,u3) est une base de ℝ³.
c. Calculer les coordonnées de u4 dans cette base.

Partie 3
1) Donner une famille solution du problème posé, pour n = 3 et a = 0.

2) On pose v1= e1 , v2 = -1/2 e1 + √3/2 e2 et v3=--1/2 e1 - √3/2 e2.
a. Montrer que (v1, v2, v3) est solution du problème posé avec a = -1/2.
b. Trouver deux réels λ et μ tels que la famille (e3, λv1 + μe3 , λv2 + μe3, λv3 + μe3 ) soit solution du problème pour n = 4.
`;

export const edhec_2002_exam = `
edhec
School of Management

ECOLE DE HAUTES ETUDES COMMERCIALES DU NORD
Concours d'admission sur classes préparatoires

MATHEMATIQUES
Option scientifique
Mardi 30 Avril 2002, de 8 h à 12 h

La présentation, la lisibilité, l'orthographe, la qualité de la rédaction, la clarté et la précision des raisonnements entreront pour une part importante dans l'appréciation des copies.
Les candidats sont invités à encadrer, dans la mesure du possible, les résultats de leurs calculs.
Ils ne doivent faire usage d'aucun document ; seule l'utilisation d'une règle graduée est autorisée.

L'utilisation de toute calculatrice et de tout matériel électronique est interdite.

Exercice 1
1) a. Montrer que l'intégrale ∫[0 to 1] (1 – ln t) dt converge et donner sa valeur.
b. Montrer que ∫[0 to x] (1-ln t)/(2 + t²) dt converge pour tout x strictement positif.

On pose alors : {∀x > 0, F(x)= ∫[0 to x] (1-ln t)/(2 + t²) dt
                {F(0) = 0.

c. Montrer que F est continue en 0.
d. Montrer que F est de classe C¹ sur ] 0, +∞[ et donner ses variations ( la limite de F en +∞ n'est pas demandée).
2) On définit la suite (un) par la donnée de son premier terme u0 = 1 et la relation de récurrence, valable pour tout n de ℕ : un+1 = F(un).
a. Établir que, pour tout n de ℕ, un∈[0, 1].
b. Montrer que u0 ≥ u1 puis déterminer par récurrence les variations de la suite (un).
c. En déduire que la suite (un) est convergente.

3) Pour tout x de [0, 1], on pose g(x) = F(x) – x.
a. Montrer qu'il existe un unique réel β de ] 0,1 [ tel que g'(β) = 0, puis donner les variations de g.
b. En déduire l'existence d'un unique réel α, élément de ] β,1 [ tel que g(α) = 0.
4) a. Montrer que : ∀n∈ℕ, un ≥ α.
b. En déduire que lim[n→+∞] un = α.

Exercice 2
Dans cet exercice, x et y désignent des réels strictement positifs.
Un commerçant se fournit auprès d'un grossiste pour constituer son stock au début de la saison 2002, lequel consiste en un certain nombre d'unités d'un produit donné d'une saison, chaque unité vendue par ce commerçant lui rapporte un bénéfice net de x euros alors que chaque unité invendue à la fin de la saison engendre une perte nette de y euros.
Ce commerçant doit constituer son stock afin de maximiser son espérance de gain.
On admet que le nombre d'unités qui seront commandées à ce commerçant pendant la saison 2002 est une variable aléatoire a valeurs dans ℕ, notée X.
On note Yn la variable aléatoire égale au gain (positif ou négatif) de ce commerçant à la fin de la saison 2002, s'il constitue un stock de n unités.

1) En distinguant deux cas selon la valeur de U, montrer que :
Yn = ( x X – ( n – X ) y ) U + nx ( 1 – U ), où U est la variable aléatoire qui vaut 1 si X≤ n et qui vaut 0 sinon.
2) a. Vérifier que la variable XU prend ses valeurs dans {0, 1, ..., n}.
b. Exprimer, sous forme de somme, l'espérance de XU à l'aide de la loi de X.

c. Montrer enfin que E(Yn) = (x + y) ∑[k=0 to n] P(X = k) + nx.

Dans la suite, on suppose que P(X = 0) < x/(x+y) et P(X ≤ n) > x/(x+y).

3) a. Exprimer E(Yn+1) – E(Yn) en fonction de x, y et ∑[k=0 to n] P(X = k).
b. Montrer qu'il existe un unique entier naturel n0 tel que :
∑[k=0 to n0] P(X = k) < x/(x+y) et ∑[k=0 to n0+1] P(X = k) ≥ x/(x+y).
c. En déduire que ce commerçant est sûr de maximiser son espérance de gain, en constituant un stock afin de maximiser son espérance de gain.
4) Une étude statistique faite au cours des saisons précédentes permet d'affirmer que X suit la loi de Poisson de paramètre a, où a est un réel strictement positif.
a. Exprimer P(X = k + 1) en fonction de P(X = k) puis montrer que, pour tout entier naturel n non nul :
∑[k=0 to n] P(X = k) < ∑[k=0 to n+1] P(X = k) et ∑[k=0 to n] P(X = k) < x/(x+y).
b. Utiliser ce résultat pour écrire un programme en Turbo Pascal permettant de calculer et d'afficher n1 lorsque l'utilisateur entre au clavier les valeurs de x, y et a.

Exercice 3
On considère deux variables aléatoires X1 et X2 de densités respectives f1 et f2 strictement positives et dérivables sur ℝ.
On suppose qu'il existe une fonction g, définie et dérivable sur ℝ+, telle que :
∀(x,y)∈ℝ², f1(x) f2 (y) = g( x² + y² ).
1) On suppose, dans cette question seulement, que X1 et X2 suivent toutes les deux la loi normale N(0, 1). Montrer que : ∀x∈ℝ+, g(x) = (1/2π) e^(-x/2).

normale N(0, 1). Montrer que : ∀x∈ℝ+, g'(x) = -xg(x), puis donner les variations de g.
b. On note h la fonction définie sur ℝ+ par h(x) = f₁(x)/x f₁'(x).
Soient x1 et x2 deux réels distincts et non nuls. Montrer que h(x1) = h(x2) et en déduire que h est une fonction constante sur ℝ+. On note a cette constante.
c. Soit k la fonction définie pour tout réel x par k(x) = f₁(x) et f₁'(x) = 0 puis déterminer y.
b. Établir que E = Ker f ⊕ Im f.

Problème
Dans tout le problème, n désigne un entier naturel.

Partie 1 : étude des symétries de ℝⁿ.
Soient F1 et F2 deux sous-espaces vectoriels de ℝⁿ, non réduits au seul vecteur nul, et supplémentaires, c'est-à-dire tels que ℝⁿ = F1 ⊕ F2.
On appelle symétrie par rapport à F1 parallèlement à F2, l'endomorphisme s de ℝⁿ défini par : s(x) = xF + xG.
Dans les trois premières questions, on se place dans l'espace euclidien ℝⁿ muni de sa structure euclidienne usuelle dans lequel le produit scalaire de deux vecteurs u et v est noté ⟨u, v⟩.
1) a. Montrer que s² = Id.
b. En déduire que Ker(s - Id) et Ker(s + Id) sont supplémentaires dans ℝⁿ.
c. Établir enfin le résultat demandé.

Partie 2 : étude de deux exemples.
1) Soit s l'endomorphisme de ℝ³ dont la matrice dans la base canonique de ℝ³ est :
M = (1/3) ([-1 2 2; 2 2 -1; 2 -1 2])

a. Déterminer les valeurs propres de s ainsi que les sous-espaces propres associés.
b. En déduire que s est une symétrie.
2) Soit s un endomorphisme de ℝⁿ tel que sos = Id.
a. Montrer que, pour tout x de ℝⁿ : x + s(x) ∈ Ker(s - Id) et x - s(x) ∈ Ker(s + Id).
b. En déduire que Ker(s - Id) et Ker(s + Id) sont supplémentaires dans ℝⁿ.
c. Établir enfin que s est est la symétrie par rapport à Ker(s - Id) parallèlement à Ker(s + Id).

Partie 3 : symétries orthogonales.
Pour tout sous-espace vectoriel F de ℝⁿ, on considère la symétrie orthogonale de ℝⁿ, dont on décide la matrice de s dans une base bien choisie.
1) Dans cette question, on suppose F ⊂ ℝⁿ et dim F = n, Montrer que la matrice de s dans une base orthonormale de ℝⁿ, dans laquelle F ⊕ F⊥ constitue une base orthonormale de ℝⁿ.
2) On considère une symétrie s de ℝⁿ et on suppose que s est orthogonale et que s(x) = xF - xG.
En utilisant le fait que s conserve la norme dans ℝⁿ, montrer que : ∀x∈ℝⁿ, ⟨xF, xG⟩ = 0.
3) On suppose de nouveau que s est une endomorphisme de ℝⁿ tel que s² = Id.
a. Montrer que s est diagonalisable dans une base bien choisie de ℝⁿ.
b. Établir que s est la symétrie orthogonale par rapport à Ker(s - Id).
4) Dans cette question, on considère la matrice N, relativement à la base canonique de ℝ³, de la symétrie orthogonale par rapport à Ker(s - Id).
a. Déterminer une base orthonormée de F.
b. En déduire la matrice N, relativement à la base canonique de ℝ³, de la symétrie orthogonale par rapport à F.
c. Établir enfin que s est la symétrie par rapport à Ker(s - Id) parallèlement à Ker(s + Id).

Partie 3 : symétries orthogonales.
Pour tout sous-espace vectoriel F de ℝⁿ, on note pF la projection orthogonale sur F et sF la symétrie orthogonale par rapport à F.
1) Déterminer sF en fonction de pF.
2) On considère une symétrie s de ℝⁿ et on suppose que s est orthogonale (c'est-à-dire que ∀u,v ∈ ℝⁿ, ⟨s(u), s(v)⟩ = ⟨u, v⟩).
En utilisant le fait que s conserve le produit scalaire dans ℝⁿ, montrer que : s est la symétrie orthogonale par rapport à Ker(s - Id).
3) On considère le sous-espace vectoriel F de ℝ³ engendré par le vecteur u = (1, 1, 1).
a. Déterminer une base orthonormée de F.
b. En déduire la matrice N, relativement à la base canonique de ℝ³, de la symétrie orthogonale par rapport à F.
4) Dans cette question, on suppose que n = 3 et que F a pour équation : x - 2y + 3z = 0.
a. Déterminer une base orthonormée de F.
b. En déduire la matrice de sF relativement à la base canonique de ℝ³.
`;

// Combined export of all exam content
export const all_edhec_exams = {
  edhec_2000_exam,
  edhec_2001_exam,
  edhec_2002_exam,
  edhec_2003_exam,
  edhec_2004_exam,
  edhec_2005_exam,
  edhec_2006_exam,
  edhec_2007_exam,
  edhec_2008_exam,
  edhec_2010_exam,
};

// Summary information
export const exam_metadata = {
  school: "École de Hautes Études Commerciales du Nord (EDHEC)",
  type: "Concours d'admission sur classes préparatoires",
  subject: "Mathématiques - Option scientifique",
  years_covered: "2000-2010",
  total_exams: 11,
  exam_duration: "4 hours (8h à 12h)",
  common_restrictions:
    "No calculator or electronic devices allowed, only graduated ruler permitted",
};
