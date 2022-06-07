# Cum sa folosesti Git

Mai jos ai cele mai utile comenzi de git

| Comanda                               | Actiune                                                                   |
| ------------------------------------- | ------------------------------------------------------------------------- |
| git add                               | Adauga fisiere                                                            |
| git commit -m "**mesajul-tau**"       | Modificarile pe care le-ai adaugat, vor fi trimise impreuna cu un mesaj   |
| git push origin **numele-branchului** | Trimiti modificarile pe care le-ai facut local, online                    |
| git status                            | Status branch, fisiere modificate, sterse, diverse informatii             |
| git branch                            | Afiseaza branch-urile pe care le ai local                                 |
| git branch **numele-branchului**      | Creeaza local un branch                                                   |
| git checkout **numele-branchului**    | Te muti pe un branch                                                      |
| git checkout -b **numele-branchului** | Iti creeaza un branch si te muta pe el                                    |
| git fetch **numele-branchului**       | Faci update la git sa fie la curent cu ultimele fisiere de pe acel branch |
| git pull origin **numele-branchului** | Iti aduci/tragi fiserele de pe acel branch                                |

## Workflow

### **TASK** :

###### Schimba-mi numele website-ului si iconita

Actual
![After](https://i.ibb.co/prP5KFV/before.png)
Cum il vreau
![Before](https://i.ibb.co/1JGkQ8n/after.png)

1. Creezi un branch, care sa aiba un nume specific la ce lucrezi tu si te muti pe el

```sh
$ git checkout -b website-title-icon
```

2. Poti sa verifici ca esti pe noul tau branch **website-title-icon**

```sh
$ git status
```

![Status](https://i.ibb.co/QHdW4M9/screen-1.png)

3. Acum tu ai o copie a proiectului, poti sa incepi sa lucrezi.
4. Ai terminat de lucrat, iar in VS Code poti deja sa vezi ce fisiere ai modificat si diferentele (fata de copia de la inceput)
   ![modifications](https://i.ibb.co/y4jcQBg/mura-in-gura.png) 1. Butonul ala e destul de **smart** si stie daca ai un proiect git initiat, iar daca ai cand incepi sa modifici fisiere iti apar acolo (in cazul asta 2 fisiere) 2. Aici poti sa vezi fisierele modificate, in cazul meu am modificat **index.html** si am adaugat o imagine cu rubik 3. Aici am modificat titlul 4. Aici am modificat iconita
5. Acum vreau ca modificarile astea pe care le-am facut sa le pun online.

```sh
$ git add index.html rubik_icon.ico
```

sau

```sh
$ git add .
```

care adauga toate fisierele modificate. Eu o folosesc in 99% din cazuri a doua varianta.
Uite statusul inainte si dupa adaugare (index.html e un fisier modificat, rubik_icon.ico e un fisier adaugat)

##### inainte

![inainte](https://i.ibb.co/4PpGSbp/Screenshot-from-2019-09-13-18-18-13.png)

##### dupa

![dupa](https://i.ibb.co/Hn91tw1/Screenshot-from-2019-09-13-18-18-33.png)

6. Acum vom face un commit cu modificarile de mai sus , caruia ii vom adauga un mesaj

```sh
$ git commit -m "Mesajul tau aici, care sa fie cat mai scurt si explicit"
```

![commit](https://i.ibb.co/zJMF6nM/Screenshot-from-2019-09-13-18-21-17.png)

7. Trimitem online ceea ce am facut local (dupa comanda asta o sa ne ceara **user** si **parola** de la github)

```sh
$ git push origin website-title-icon
```

Putem spune ca treaba ta s-a terminat! Ai facut o copie la proiect, ai facut modificari, ai trimis modificarile tale. Acum va trebui sa ma anunti, iar eu va trebui sa iti verific codul inainte sa ajunga online pe master (pe proiectul principal), va trebui sa faci un pull request pe care il poti face foarte usor din github

1. Mergi pe github la proiect , in cazul nostru aici
2. ![merge-request](https://i.ibb.co/PQYVmFs/merge-request.png)
   1.Pull requests
   2.New pull request
3. ![compare](https://i.ibb.co/ZmDtpKm/2019-09-13-18-33.png)
   1. Alegi branch-ul (in cazul nostru website-title-icon)
   2. Selectezi **Create pull request**, iar pe urma o sa fie mai jos inca o data **Create pull request**

### Felicitar! Tocmai ai facut primul tau commit!

Daca vrei sa incepi sa lucrezi la altceva o iei de la inceput. Prima data te duci pe master, creezi un nou branch, te muti pe noul branch, modifici , adaugi, faci commit, push , merge request. Asta e flow-ul.

```sh
$ git checkout master
$ git branch "nume-branch-nou"
$ git checkout "numele-noului-branch"
```

#### Atentie, iti reamintesc ca dupa aceste comenzi, tu nu o sa mai vezi modificarile de pe celalalt branch, pentru ca asta e o noua copie a site-ului si aici lucrezi
