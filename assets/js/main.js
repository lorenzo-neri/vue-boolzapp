/* 
Iniziamo a lavorare alla nostra replica della nota app di messaggistica.

Milestone 1 ✅
● Replica della grafica con la possibilità di avere messaggi scritti dall'utente (verdi) e dall'interlocutore (bianco) assegnando due classi CSS diverse
● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

Milestone 2 ✅
● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
● Click sul contatto mostra la conversazione del contatto cliccato

Milestone 3 ✅
● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

Milestone 4 ✅
● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

Milestone 5 - Bonus opzionale
● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
● Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti
*/

/* 

TO DO RIMASTE

MILESTONE 5 

*/

const { createApp } = Vue

createApp({
    data() {
        return {
            searchText: '', //testo inserito nell'input di ricerca
            //filteredContacts: [],
            activeContact: 0,
            //activeFilteredContact: 0, //indice del contatto attivo all'interno di filteredContacts
            userText: '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: './assets/img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './assets/img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {//20/03/2020 16:30:00
                            date: '03/20/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '03/20/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '03/20/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './assets/img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '03/28/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '03/28/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '03/28/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './assets/img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './assets/img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './assets/img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './assets/img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './assets/img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
    },
    methods: {
        //seleziono il contatto
        selectContact(index) {

            //svuoto l'input quando cambio chat
            this.userText = '';

            this.activeContact = index;
            // const filteredIndex = this.contacts.indexOf(this.filteredContacts[index]);
            // this.activeContact = filteredIndex;
            console.log(this.activeContact);
        },

        //filtro i contatti
        filterContacts() {
            console.log(this.searchText);
            const search = this.searchText.toLowerCase();

            this.contacts.forEach((contact) => {

                //controllo se il nome del contatto include il testo di ricerca
                const name = contact.name.toLowerCase();

                contact.visible = name.includes(search);
            });

            /* this.filteredContacts = this.contacts.filter(contact => {
                return contact.name.toLowerCase().includes(search);
            }); */

            //console.log(this.filteredContacts);
        },

        //invio messaggio
        sendMessage() {

            if (this.userText.trim() === '') {
                //non invio messaggi vuoti
                return;
            }

            //recupero ore e minuti
            const now = new Date();
            //formatto ore e minuti con due cifre
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const formattedTime = `${hours}:${minutes}`;

            const userMessage = {
                date: formattedTime,
                message: this.userText,
                status: 'sent'
            };

            console.log(this.userText);

            this.contacts[this.activeContact].messages.push(userMessage);

            //svuoto input dopo invio
            this.userText = '';

            //messaggio di risposta
            setTimeout(() => {
                const replyMessage = {
                    date: formattedTime,
                    message: 'Ok!',
                    status: 'received'
                };

                console.log('messaggio inviato');

                this.contacts[this.activeContact].messages.push(replyMessage);

            }, 1000);
        },

        formatTime(dateTime) {
            const options = { hour: '2-digit', minute: '2-digit' };
            return new Date(dateTime).toLocaleTimeString([], options);
        },

    },

    //ad applicazione creata
    created() {
        this.filteredContacts = this.contacts; //ALL'INIZIO MOSTRA TUTTI I CONTATTI
        this.activeFilteredContact = 0; //imposta l'indice del contatto attivo iniziale
    }
}).mount('#app')