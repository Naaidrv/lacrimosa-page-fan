        // =============================
        // 🎵 Music Player Dinámico por Álbum - Versión Corregida
        // =============================

        // 1️⃣ Playlists por álbum
        const albumPlaylists = {


                // ---- Lament ----
            lament: [
                { id: 1, name: "Lament", artist: "Lacrimosa", album: "Lament", duration: "9:32", durationSeconds: 572, artwork: "/img/lament.jpg", audioUrl: "/songs/Lament - Lacrimosa.mp3" },
                { id: 2, name: "Ein Sturm zieht auf", artist: "Lacrimosa", album: "Lament", duration: "7:30", durationSeconds: 450, artwork: "/img/lament.jpg", audioUrl: "/songs/Ein Sturm zieht auf - Lacrimosa.mp3" },
                { id: 3, name: "Ein langer Weg", artist: "Lacrimosa", album: "Lament", duration: "7:34", durationSeconds: 454, artwork: "/img/lament.jpg", audioUrl: "/songs/Ein langer Weg - Lacrimosa.mp3" },
                { id: 4, name: "Du bist alles was ich will", artist: "Lacrimosa", album: "Lament", duration: "4:32", durationSeconds: 272, artwork: "/img/lament.jpg", audioUrl: "/songs/Du bist alles was ich will - Lacrimosa.mp3" },
                { id: 5, name: "Avalon", artist: "Lacrimosa", album: "Lament", duration: "4:32", durationSeconds: 272, artwork: "/img/lament.jpg", audioUrl: "/songs/Avalon - Lacrimosa.mp3" },
                { id: 6, name: "Geliebtes Monster", artist: "Lacrimosa", album: "Lament", duration: "5:54", durationSeconds: 354, artwork: "/img/lament.jpg", audioUrl: "/songs/Geliebtes Monster - Lacrimosa.mp3" },
                { id: 7, name: "Dark is The Night", artist: "Lacrimosa", album: "Lament", duration: "4:35", durationSeconds: 275, artwork: "/img/lament.jpg", audioUrl: "/songs/Dark is The Night - Lacrimosa.mp3" },
                { id: 8, name: "Punk & Pomerol", artist: "Lacrimosa", album: "Lament", duration: "5:21", durationSeconds: 321, artwork: "/img/lament.jpg", audioUrl: "/songs/Punk & Pomerol - Lacrimosa.mp3" },
                { id: 9, name: "In einem anderen Leben", artist: "Lacrimosa", album: "Lament", duration: "5:34", durationSeconds: 334, artwork: "/img/lament.jpg", audioUrl: "/songs/In einem anderen Leben - Lacrimosa.mp3" },
                { id: 10, name: "Memoria", artist: "Lacrimosa", album: "Lament", duration: "7:03", durationSeconds: 423, artwork: "/img/lament.jpg", audioUrl: "/songs/Memoria - Lacrimosa.mp3" }
            ],

                // ---- Leidenschaft ----
            leidenschaft: [
                { id: 1, name: "Liebe über Leben", artist: "Lacrimosa", album: "Leidenschaft", duration: "6:12", durationSeconds: 415, artwork: "/img/leidenschaft.jpeg", audioUrl: "/songs/Leidenschaft/Liebe uber Leben.mp3" },
                { id: 2, name: "Führ mich nochmal in den Sturm", artist: "Lacrimosa", album: "Leidenschaft", duration: "6:00", durationSeconds: 344, artwork: "/img/leidenschaft.jpeg", audioUrl: "/songs/Leidenschaft/Fuhr mich nochmal in den Sturm.mp3" },
                { id: 3, name: "Kulturasche", artist: "Lacrimosa", album: "Leidenschaft", duration: "4:22", durationSeconds: 344, artwork: "/img/leidenschaft.jpeg", audioUrl: "/songs/Leidenschaft/Kulturasche.mp3" },
                { id: 4, name: "The Daughter Of Coldness", artist: "Lacrimosa", album: "Leidenschaft", duration: "4:32", durationSeconds: 344, artwork: "/img/leidenschaft.jpeg", audioUrl: "/songs/Leidenschaft/The Daughter Of Coldness.mp3" },
                { id: 5, name: "Raubtier", artist: "Lacrimosa", album: "Leidenschaft", duration: "4:57", durationSeconds: 344, artwork: "/img/leidenschaft.jpeg", audioUrl: "/songs/Leidenschaft/Raubtier.mp3" },
                { id: 6, name: "Die Antwort ist Schweigen", artist: "Lacrimosa", album: "Leidenschaft", duration: "6:24", durationSeconds: 415, artwork: "/img/leidenschaft.jpeg", audioUrl: "/songs/Leidenschaft/Die Antwort ist Schweigen.mp3" },
                { id: 7, name: "Celebrate the Darkness", artist: "Lacrimosa", album: "Leidenschaft", duration: "5:49", durationSeconds: 344, artwork: "/img/leidenschaft.jpeg", audioUrl: "/songs/Leidenschaft/Celebrate the Darknessn.mp3" },
                { id: 8, name: "Augenschein", artist: "Lacrimosa", album: "Leidenschaft", duration: "4:49", durationSeconds: 344, artwork: "/img/leidenschaft.jpeg", audioUrl: "/songs/Leidenschaft/Augenschein.mp3" },
                { id: 9, name: "Die Liebenden", artist: "Lacrimosa", album: "Leidenschaft", duration: "4:12", durationSeconds: 344, artwork: "/img/leidenschaft.jpeg", audioUrl: "/songs/Leidenschaft/Die Liebenden.mp3" },
                { id: 10, name: "Exodus", artist: "Lacrimosa", album: "Leidenschaft", duration: "8:24", durationSeconds: 344, artwork: "/img/leidenschaft.jpeg", audioUrl: "/songs/Leidenschaft/Exodus.mp3" },
            ],

                // ---- Testimonium ----
            testimonium: [
                { id: 1, name: "Wenn unsere Helden sterben", artist: "Lacrimosa", album: "Testimonium", duration: "5:46", durationSeconds: 415, artwork: "/img/testimonium.jpeg", audioUrl: "/songs/Testimonium/Wenn unsere Helden sterben.mp3" },
                { id: 2, name: "Nach dem Sturm", artist: "Lacrimosa", album: "Testimonium", duration: "7:06", durationSeconds: 415, artwork: "/img/testimonium.jpeg", audioUrl: "/songs/Testimonium/Nach Dem Sturm.mp3" },
                { id: 3, name: "Zwischen Allen Stühlen", artist: "Lacrimosa", album: "Testimonium", duration: "4:17", durationSeconds: 415, artwork: "/img/testimonium.jpeg", audioUrl: "/songs/Testimonium/Zwischen allen Stühlen.mp3" },
                { id: 4, name: "Weltenbrand", artist: "Lacrimosa", album: "Testimonium", duration: "8:00", durationSeconds: 415, artwork: "/img/testimonium.jpeg", audioUrl: "/songs/Testimonium/Weltenbrand.mp3" },
                { id: 5, name: "Lass Die Nacht Nicht Über Mich Fallen", artist: "Lacrimosa", album: "Testimonium", duration: "7:26", durationSeconds: 415, artwork: "/img/testimonium.jpeg", audioUrl: "/songs/Testimonium/Lass die Nacht nicht über mich fallen.mp3" },
                { id: 6, name: "Herz und Verstand", artist: "Lacrimosa", album: "Testimonium", duration: "5:33", durationSeconds: 415, artwork: "/img/testimonium.jpeg", audioUrl: "/songs/Testimonium/Herz und Verstand.mp3" },
                { id: 7, name: "Black Wedding Day", artist: "Lacrimosa", album: "Testimonium", duration: "4:54", durationSeconds: 415, artwork: "/img/testimonium.jpeg", audioUrl: "/songs/Testimonium/Black Wedding Day.mp3" },                
                { id: 8, name: "My Pain", artist: "Lacrimosa", album: "Testimonium", duration: "4:18", durationSeconds: 344, artwork: "/img/testimonium.jpeg", audioUrl: "/songs/Testimonium/MyPain.mp3" },
                { id: 9, name: "Der leise Tod", artist: "Lacrimosa", album: "Testimonium", duration: "5:17", durationSeconds: 415, artwork: "/img/testimonium.jpeg", audioUrl: "/songs/Testimonium/Der leise Tod.mp3" },
                { id: 10, name: "Testimonium", artist: "Lacrimosa", album: "Testimonium", duration: "10:03", durationSeconds: 415, artwork: "/img/testimonium.jpeg", audioUrl: "/songs/Testimonium/Testimonium.mp3" },
            ],

                // ---- Hoffnung ----
            hoffnung: [
                { id: 1, name: "Mondfeuer", artist: "Lacrimosa", album: "Hoffnung", duration: "15:15", durationSeconds: 915, artwork: "/img/hoffnung.jpeg", audioUrl: "/songs/Hoffnung/Mondfeuer.mp3" },
                { id: 2, name: "Kaleidoskop", artist: "Lacrimosa", album: "Hoffnung", duration: "6:15", durationSeconds: 675, artwork: "/img/hoffnung.jpeg", audioUrl: "/songs/Hoffnung/Kaleidoskop.mp3" },
                { id: 3, name: "UnterWelt", artist: "Lacrimosa", album: "Hoffnung", duration: "3:50", durationSeconds: 230, artwork: "/img/hoffnung.jpeg", audioUrl: "/songs/Hoffnung/Unterwelt.mp3" },
                { id: 4, name: "Die unbekannte Farbe", artist: "Lacrimosa", album: "Hoffnung", duration: "5:35", durationSeconds: 335, artwork: "/img/hoffnung.jpeg", audioUrl: "/songs/Hoffnung/Die unbekannte Farbe.mp3" },
                { id: 5, name: "Der Kelch der Hoffnung", artist: "Lacrimosa", album: "Hoffnung", duration: "3:24", durationSeconds: 204, artwork: "/img/hoffnung.jpeg", audioUrl: "/songs/Hoffnung/Der Kelch der Hoffnung.mp3" },
                { id: 6, name: "Thunder And Lightning", artist: "Lacrimosa", album: "Hoffnung", duration: "3:55", durationSeconds: 235, artwork: "/img/hoffnung.jpeg", audioUrl: "/songs/Hoffnung/Thunder And Lightning.mp3" },
                { id: 7, name: "Tränen der Liebe", artist: "Lacrimosa", album: "Hoffnung", duration: "6:39", durationSeconds: 399, artwork: "/img/hoffnung.jpeg", audioUrl: "/songs/Hoffnung/Tränen der Liebe.mp3" },                
                { id: 8, name: "Der freie Fall (Apeiron, Pt. 1)", artist: "Lacrimosa", album: "Hoffnung", duration: "6:17", durationSeconds: 377, artwork: "/img/hoffnung.jpeg", audioUrl: "/songs/Hoffnung/Der freie Fall (Apeiron, Pt. 1).mp3" },
                { id: 9, name: "Apeiron (Der freie Fall, Pt. 2)", artist: "Lacrimosa", album: "Hoffnung", duration: "9:07", durationSeconds: 549, artwork: "/img/hoffnung.jpeg", audioUrl: "/songs/Hoffnung/Apeiron (Der freie Fall, Pt. 2).mp3" },
                { id: 10, name: "Keine Schatten mehr", artist: "Lacrimosa", album: "Hoffnung", duration: "2:28", durationSeconds: 148, artwork: "/img/hoffnung.jpeg", audioUrl: "/songs/Hoffnung/Keine Schatten mehr.mp3" },

            ],

                // ---- Revolution ----
            revolution: [
                { id: 1, name: "Irgendein Arsch Ist Immer Unterwegs", artist: "Lacrimosa", album: "Revolution", duration: "5:03", durationSeconds: 303, artwork: "/img/revolution.jpg", audioUrl: "/songs/Revolution/Irgendein Arsch Ist Immer Unterwegs.mp3" },
                { id: 2, name: "If the world stood still a day", artist: "Lacrimosa", album: "Revolution", duration: "3:37", durationSeconds: 210, artwork: "/img/revolution.jpg", audioUrl: "/songs/Revolution/If the world stood still a day.mp3" },
                { id: 3, name: "Verloren", artist: "Lacrimosa", album: "Revolution", duration: "7:32", durationSeconds: 452, artwork: "/img/revolution.jpg", audioUrl: "/songs/Revolution/Verloren.mp3" },
                { id: 4, name: "This is the night", artist: "Lacrimosa", album: "Revolution", duration: "5:26", durationSeconds: 326, artwork: "/img/revolution.jpg", audioUrl: "/songs/Revolution/This is the night.mp3" },
                { id: 5, name: "Interlude (Feuerzug, Pt. 1)", artist: "Lacrimosa", album: "Revolution", duration: "0:46", durationSeconds: 46, artwork: "/img/revolution.jpg", audioUrl: "/songs/Revolution/Interlude (Feuerzug, Pt. 1).mp3" },
                { id: 6, name: "Feuerzug", artist: "Lacrimosa", album: "Revolution", duration: "4:43", durationSeconds: 283, artwork: "/img/revolution.jpg", audioUrl: "/songs/Revolution/Feuerzug.mp3" },
                { id: 7, name: "Refugium", artist: "Lacrimosa", album: "Revolution", duration: "4:44", durationSeconds: 284, artwork: "/img/revolution.jpg", audioUrl: "/songs/Revolution/Refugium.mp3" },                
                { id: 8, name: "Weil Du Hilfe Brauchst", artist: "Lacrimosa", album: "Revolution", duration: "6:05", durationSeconds: 367, artwork: "/img/revolution.jpg", audioUrl: "/songs/Revolution/Weil Du Hilfe Brauchst.mp3" },
                { id: 9, name: "Rote Sinfonie", artist: "Lacrimosa", album: "Revolution", duration: "11:06", durationSeconds: 666, artwork: "/img/revolution.jpg", audioUrl: "/songs/Revolution/Rote Sinfonie.mp3" },
                { id: 10, name: "Revolution", artist: "Lacrimosa", album: "Revolution", duration: "5:24", durationSeconds: 324, artwork: "/img/revolution.jpg", audioUrl: "/songs/Revolution/Revolution.mp3" },
            ],

                // ---- Sehnsucht ----
            sehnsucht: [
                { id: 1, name: "Die Sehnsucht in mir", artist: "Lacrimosa", album: "Sehnsucht", duration: "8:07", durationSeconds: 488, artwork: "/img/Sehnsucht.jpg", audioUrl: "/songs/Sehnsucht/Die Sehnsucht in mir.mp3" },
                { id: 2, name: "Mandira Nabula", artist: "Lacrimosa", album: "Sehnsucht", duration: "5:17", durationSeconds: 317, artwork: "/img/Sehnsucht.jpg", audioUrl: "/songs/Sehnsucht/Mandira Nabula.mp3" },
                { id: 3, name: "A.u.S", artist: "Lacrimosa", album: "Sehnsucht", duration: "6:51", durationSeconds: 411, artwork: "/img/Sehnsucht.jpg", audioUrl: "/songs/Sehnsucht/A.u.S.mp3" },
                { id: 4, name: "Feuer", artist: "Lacrimosa", album: "Sehnsucht", duration: "4:34", durationSeconds: 274, artwork: "/img/Sehnsucht.jpg", audioUrl: "/songs/Sehnsucht/Feuer.mp3" },
                { id: 5, name: "A Prayer For Your Heart", artist: "Lacrimosa", album: "Sehnsucht", duration: "4:34", durationSeconds: 274, artwork: "/img/Sehnsucht.jpg", audioUrl: "/songs/Sehnsucht/A Prayer For Your Heart.mp3" },
                { id: 6, name: "I Lost My Star In Krasnodar", artist: "Lacrimosa", album: "Sehnsucht", duration: "5:40", durationSeconds: 340, artwork: "/img/Sehnsucht.jpg", audioUrl: "/songs/Sehnsucht/I Lost My Star In Krasnodar.mp3" },
                { id: 7, name: "Die Taube", artist: "Lacrimosa", album: "Sehnsucht", duration: "7:29", durationSeconds: 449, artwork: "/img/Sehnsucht.jpg", audioUrl: "/songs/Sehnsucht/Die Taube.mp3" },                
                { id: 8, name: "Call Me With The Voice Of Love", artist: "Lacrimosa", album: "Sehnsucht", duration: "3:37", durationSeconds: 217, artwork: "/img/Sehnsucht.jpg", audioUrl: "/songs/Sehnsucht/Call Me With The Voice Of Love.mp3" },
                { id: 9, name: "Der tote Winkel", artist: "Lacrimosa", album: "Sehnsucht", duration: "5:24", durationSeconds: 324, artwork: "/img/Sehnsucht.jpg", audioUrl: "/songs/Sehnsucht/Der tote Winkel.mp3" },
                { id: 10, name: "Koma", artist: "Lacrimosa", album: "Sehnsucht", duration: "7:47", durationSeconds: 467, artwork: "/img/Sehnsucht.jpg", audioUrl: "/songs/Sehnsucht/Koma.mp3" },
            ],

                // ---- Lichtgestalt ----
            lichtgestalt: [
                { id: 1, name: "Sapphire", artist: "Lacrimosa", album: "Lichtgestalt", duration: "11:15", durationSeconds: 675, artwork: "/img/Lichtgestalt.jpeg", audioUrl: "/songs/Lichtgestalt/Sapphire.mp3" },
                { id: 2, name: "Kelch der Liebe", artist: "Lacrimosa", album: "Lichtgestalt", duration: "5:17", durationSeconds: 365, artwork: "/img/Lichtgestalt.jpeg", audioUrl: "/songs/Lichtgestalt/Kelch der Liebe.mp3" },
                { id: 3, name: "Lichtgestalt", artist: "Lacrimosa", album: "Lichtgestalt", duration: "5:18", durationSeconds: 318, artwork: "/img/Lichtgestalt.jpeg", audioUrl: "/songs/Lichtgestalt/Lichtgestalt.mp3" },
                { id: 4, name: "Nachtschatten", artist: "Lacrimosa", album: "Lichtgestalt", duration: "7:08", durationSeconds: 428, artwork: "/img/Lichtgestalt.jpeg", audioUrl: "/songs/Lichtgestalt/Nachtschatten.mp3" },
                { id: 5, name: "My Last Goodbye", artist: "Lacrimosa", album: "Lichtgestalt", duration: "8:10", durationSeconds: 490, artwork: "/img/Lichtgestalt.jpeg", audioUrl: "/songs/Lichtgestalt/My Last Goodbye.mp3" },
                { id: 6, name: "The Party Is Over", artist: "Lacrimosa", album: "Lichtgestalt", duration: "5:29", durationSeconds: 329, artwork: "/img/Lichtgestalt.jpeg", audioUrl: "/songs/Lichtgestalt/The Party Is Over.mp3" },
                { id: 7, name: "Letzte Ausfahrt Leben", artist: "Lacrimosa", album: "Lichtgestalt", duration: "7:29", durationSeconds: 344, artwork: "/img/Lichtgestalt.jpeg", audioUrl: "/songs/Lichtgestalt/Letzte Ausfahrt Leben.mp3" },                
                { id: 8, name: "Hohelied der Liebe", artist: "Lacrimosa", album: "Lichtgestalt", duration: "3:37", durationSeconds: 870, artwork: "/img/Lichtgestalt.jpeg", audioUrl: "/songs/Lichtgestalt/Hohelied der Liebe.mp3" },
            ],

                // ---- ECHOS ----
            echos: [
                { id: 1, name: "Kyrie", artist: "Lacrimosa", album: "Echos", duration: "12:00", durationSeconds: 420, artwork: "/img/echos.jpeg", audioUrl: "/songs/Echos/Kyrie.mp3" },
                { id: 2, name: "Durch Nacht und Flut", artist: "Lacrimosa", album: "Echos", duration: "7:17", durationSeconds: 437, artwork: "/img/echos.jpeg", audioUrl: "/songs/Echos/Durch Nacht und Flut.mp3" },
                { id: 3, name: "Sacrifice", artist: "Lacrimosa", album: "Echos", duration: "5:14", durationSeconds: 314, artwork: "/img/echos.jpeg", audioUrl: "/songs/Echos/Sacrifice.mp3" },
                { id: 4, name: "Apart", artist: "Lacrimosa", album: "Echos", duration: "5:58", durationSeconds: 358, artwork: "/img/echos.jpeg", audioUrl: "/songs/Echos/Apart.mp3" },
                { id: 5, name: "Ein Hauch von Menschlichkeit", artist: "Lacrimosa", album: "Echos", duration: "5:07", durationSeconds: 198, artwork: "/img/echos.jpeg", audioUrl: "/songs/Echos/Ein Hauch von Menschlichkeit.mp3" },
                { id: 6, name: "Eine Nacht in Ewigkeit", artist: "Lacrimosa", album: "Echos", duration: "5:57", durationSeconds: 833, artwork: "/img/echos.jpeg", audioUrl: "/songs/Echos/Eine Nacht in Ewigkeit.mp3" },
                { id: 7, name: "Malina", artist: "Lacrimosa", album: "Echos", duration: "4:51", durationSeconds: 833, artwork: "/img/echos.jpeg", audioUrl: "/songs/Echos/Malina.mp3" },
                { id: 8, name: "Die Schreie sind verstummt", artist: "Lacrimosa", album: "Echos", duration: "12:43", durationSeconds: 833, artwork: "/img/echos.jpeg", audioUrl: "/songs/Echos/Die Schreie sind verstummt.mp3" }
            ],

            // ---- FASSADE ----
            fassade: [
                { id: 1, name: "Fassade – 1. Satz", artist: "Lacrimosa", album: "Fassade", duration: "9:53", durationSeconds: 593, artwork: "/img/fassade.jpg", audioUrl: "/songs/Fassade/Fassade (1. Satz).mp3" },
                { id: 2, name: "Der Morgen danach", artist: "Lacrimosa", album: "Fassade", duration: "4:29", durationSeconds: 269, artwork: "/img/fassade.jpg", audioUrl: "/songs/Fassade/Der Morgen danach.mp3" },
                { id: 3, name: "Warum so tief", artist: "Lacrimosa", album: "Fassade", duration: "4:40", durationSeconds: 280, artwork: "/img/fassade.jpg", audioUrl: "/songs/Fassade/Warum so tief.mp3" },
                { id: 4, name: "Fassade – 2. Satz", artist: "Lacrimosa", album: "Fassade", duration: "10:03", durationSeconds: 603, artwork: "/img/fassade.jpg", audioUrl: "/songs/Fassade/Fassade (2. Satz).mp3" },
                { id: 5, name: "Liebesspiel", artist: "Lacrimosa", album: "Fassade", duration: "4:36", durationSeconds: 276, artwork: "/img/fassade.jpg", audioUrl: "/songs/Fassade/Liebesspiel.mp3" },
                { id: 6, name: "Stumme Worte", artist: "Lacrimosa", album: "Fassade", duration: "3:47", durationSeconds: 227, artwork: "/img/fassade.jpg", audioUrl: "/songs/Fassade/Stumme Worte.mp3" },
                { id: 7, name: "Fassade – 3. Satz", artist: "Lacrimosa", album: "Fassade", duration: "11:52", durationSeconds: 712, artwork: "/img/fassade.jpg", audioUrl: "/songs/Fassade/Fassade (3. Satz).mp3" }
            ],

            // ---- ELODIA ----
            elodia: [
                { id: 1, name: "Am Ende stehen wir zwei", artist: "Lacrimosa", album: "Elodia", duration: "5:39", durationSeconds: 339, artwork: "/img/elodia.jpeg", audioUrl: "/songs/Elodia/Am Ende stehen wir zwei.mp3" },
                { id: 2, name: "Alleine zu zweit", artist: "Lacrimosa", album: "Elodia", duration: "4:22", durationSeconds: 262, artwork: "/img/elodia.jpeg", audioUrl: "/songs/Elodia/Alleine zu zweit.mp3" },
                { id: 3, name: "Halt mich", artist: "Lacrimosa", album: "Elodia", duration: "5:45", durationSeconds: 345, artwork: "/img/elodia.jpeg", audioUrl: "/songs/Elodia/Halt mich.mp3" },
                { id: 4, name: "The turning point", artist: "Lacrimosa", album: "Elodia", duration: "5:20", durationSeconds: 320, artwork: "/img/elodia.jpeg", audioUrl: "/songs/Elodia/The turning point.mp3" },
                { id: 5, name: "Ich verlasse heut' Dein Herz", artist: "Lacrimosa", album: "Elodia", duration: "4:28", durationSeconds: 268, artwork: "/img/elodia.jpeg", audioUrl: "/songs/Elodia/Ich verlasse heut' Dein Herz.mp3" },
                { id: 6, name: "Dich zu töten fiel mir schwer", artist: "Lacrimosa", album: "Elodia", duration: "12:12", durationSeconds: 732, artwork: "/img/elodia.jpeg", audioUrl: "/songs/Elodia/Dich zu töten fiel mir schwer.mp3" },
                { id: 7, name: "Sanctus", artist: "Lacrimosa", album: "Elodia", duration: "12:12", durationSeconds: 732, artwork: "/img/elodia.jpeg", audioUrl: "/songs/Elodia/Sanctus.mp3" },
                { id: 8, name: "Am Ende stehen wir zwei", artist: "Lacrimosa", album: "Elodia", duration: "12:12", durationSeconds: 732, artwork: "/img/elodia.jpeg", audioUrl: "/songs/Elodia/Am Ende stehen wir zwei.mp3" }
            ],

            // ---- STILLE ----
            stille: [
                { id: 1, name: "Der erste Tag", artist: "Lacrimosa", album: "Stille", duration: "6:24", durationSeconds: 384, artwork: "/img/stille.jpeg", audioUrl: "/songs/Stille/Der erste Tag.mp3" },
                { id: 2, name: "Not Every Pain Hurts", artist: "Lacrimosa", album: "Stille", duration: "3:55", durationSeconds: 235, artwork: "/img/stille.jpeg", audioUrl: "/songs/Stille/Not Every Pain Hurts.mp3" },
                { id: 3, name: "Siehst Du mich im Licht", artist: "Lacrimosa", album: "Stille", duration: "5:11", durationSeconds: 311, artwork: "/img/stille.jpeg", audioUrl: "/songs/Stille/Siehst Du mich im Licht.mp3" },
                { id: 4, name: "Deine Nähe", artist: "Lacrimosa", album: "Stille", duration: "5:50", durationSeconds: 350, artwork: "/img/stille.jpeg", audioUrl: "/songs/Stille/Deine Nähe.mp3" },
                { id: 5, name: "Stolzes Herz", artist: "Lacrimosa", album: "Stille", duration: "4:50", durationSeconds: 290, artwork: "/img/stille.jpeg", audioUrl: "/songs/Stille/Stolzes Herz.mp3" },
                { id: 6, name: "Mein zweites Herz", artist: "Lacrimosa", album: "Stille", duration: "6:32", durationSeconds: 392, artwork: "/img/stille.jpeg", audioUrl: "/songs/Stille/Mein zweites Herz.mp3" },
                { id: 7, name: "Make It End", artist: "Lacrimosa", album: "Stille", duration: "4:42", durationSeconds: 282, artwork: "/img/stille.jpeg", audioUrl: "/songs/Stille/Make It End.mp3" },
                { id: 8, name: "Die Strasse der Zeit", artist: "Lacrimosa", album: "Stille", duration: "4:42", durationSeconds: 282, artwork: "/img/stille.jpeg", audioUrl: "/songs/Stille/Die Strasse der Zeit.mp3" },
            ],

            // ---- INFERNO ----
            inferno: [
                { id: 1, name: "Versiegelt glanzumströmt", artist: "Lacrimosa", album: "Inferno", duration: "6:20", durationSeconds: 380, artwork: "/img/inferno.jpg", audioUrl: "/songs/Versiegelt glanzumströmt.mp3" },
                { id: 2, name: "Copycat", artist: "Lacrimosa", album: "Inferno", duration: "4:25", durationSeconds: 265, artwork: "/img/inferno.jpg", audioUrl: "/songs/Copycat.mp3" },
                { id: 3, name: "Schakal", artist: "Lacrimosa", album: "Inferno", duration: "5:57", durationSeconds: 357, artwork: "/img/inferno.jpg", audioUrl: "/songs/Schakal.mp3" },
                { id: 4, name: "Vermächtnis der Sonne", artist: "Lacrimosa", album: "Inferno", duration: "6:08", durationSeconds: 368, artwork: "/img/inferno.jpg", audioUrl: "/songs/Vermächtnis der Sonne.mp3" },
                { id: 5, name: "No blind eyes can see", artist: "Lacrimosa", album: "Inferno", duration: "7:16", durationSeconds: 436, artwork: "/img/inferno.jpg", audioUrl: "/songs/No blind eyes can see.mp3" },
                { id: 6, name: "Darkness", artist: "Lacrimosa", album: "Inferno", duration: "3:56", durationSeconds: 236, artwork: "/img/inferno.jpg", audioUrl: "/songs/Darkness.mp3" },
                { id: 7, name: "Der Kelch des Lebens", artist: "Lacrimosa", album: "Inferno", duration: "8:32", durationSeconds: 512, artwork: "/img/inferno.jpg", audioUrl: "/songs/Der Kelch des Lebens.mp3" }
            ],
            
            // ---- SATURA ----
            satura: [
                { id: 1, name: "Ich bin der brennende Komet", artist: "Lacrimosa", album: "Satura", duration: "7:04", durationSeconds: 424, artwork: "/img/satura.jpg", audioUrl: "/songs/Satura/Ich bin der brennende Komet.mp3" },
                { id: 2, name: "Satura", artist: "Lacrimosa", album: "Satura", duration: "6:32", durationSeconds: 392, artwork: "/img/satura.jpg", audioUrl: "/songs/Satura/Satura.mp3" },
                { id: 3, name: "Verloren", artist: "Lacrimosa", album: "Satura", duration: "5:21", durationSeconds: 321, artwork: "/img/satura.jpg", audioUrl: "/songs/Satura/Verloren.mp3" },
                { id: 4, name: "Abschied", artist: "Lacrimosa", album: "Satura", duration: "8:11", durationSeconds: 491, artwork: "/img/satura.jpg", audioUrl: "/songs/Satura/Abschied.mp3" }
            ],

            // ---- EINSAMKEIT ----
            einsamkeit: [
                { id: 1, name: "Tränen der Sehnsucht", artist: "Lacrimosa", album: "Einsamkeit", duration: "6:41", durationSeconds: 401, artwork: "/img/einsamkeit.jpg", audioUrl: "/songs/einsamkeit/Tränen der Sehnsucht.mp3" },
                { id: 2, name: "Requiem", artist: "Lacrimosa", album: "Einsamkeit", duration: "4:20", durationSeconds: 260, artwork: "/img/einsamkeit.jpg", audioUrl: "/songs/einsamkeit/Requiem.mp3" },
                { id: 3, name: "Einsamkeit", artist: "Lacrimosa", album: "Einsamkeit", duration: "7:08", durationSeconds: 428, artwork: "/img/einsamkeit.jpg", audioUrl: "/songs/einsamkeit/Einsamkeit.mp3" },
                { id: 4, name: "Bresso", artist: "Lacrimosa", album: "Einsamkeit", duration: "4:15", durationSeconds: 255, artwork: "/img/einsamkeit.jpg", audioUrl: "/songs/einsamkeit/Bresso.mp3" },
                {id: 5, name: "Der Ketzer", artist: "Lacrimosa", album: "Einsamkeit", duration: "6:04", durationSeconds: 364, artwork: "/img/einsamkeit.jpg", audioUrl: "/songs/einsamkeit/Der Ketzer.mp3" }
            ],

            // ---- ANGST ----
            angst: [
                { id: 1, name: "Seele in Not", artist: "Lacrimosa", album: "Angst", duration: "5:50", durationSeconds: 350, artwork: "/img/angst.jpg", audioUrl: "/songs/Seele in Not.mp3" },
                { id: 2, name: "Der Tod", artist: "Lacrimosa", album: "Angst", duration: "4:42", durationSeconds: 282, artwork: "/img/angst.jpg", audioUrl: "/songs/Der Tod.mp3" },
                { id: 3, name: "Die Angst", artist: "Lacrimosa", album: "Angst", duration: "5:23", durationSeconds: 323, artwork: "/img/angst.jpg", audioUrl: "/songs/Die Angst.mp3" },
                { id: 4, name: "Der letzte Hilfeschrei", artist: "Lacrimosa", album: "Angst", duration: "6:35", durationSeconds: 395, artwork: "/img/angst.jpg", audioUrl: "/songs/Der letzte Hilfeschrei.mp3" },
                { id: 5, name: "Lob des Todes", artist: "Lacrimosa", album: "Angst", duration: "7:03", durationSeconds: 423, artwork: "/img/angst.jpg", audioUrl: "/songs/Lob des Todes.mp3" },
                { id: 6, name: "Der Ketzer (Live)", artist: "Lacrimosa", album: "Angst", duration: "5:14", durationSeconds: 314, artwork: "/img/angst.jpg", audioUrl: "/songs/Der Ketzer (Live).mp3" }
            ]
        };

        // 2️⃣ Clase MusicPlayer
        class MusicPlayer {
            constructor() {
                this.currentTrack = 0;
                this.isPlaying = false;
                this.isMinimized = false;
                this.volume = 0.7;
                this.currentTime = 0;
                this.duration = 0;

                // Playlist inicial vacía, se cargará al hacer clic
                this.playlist = [];

                this.init();
            }

            init() {
                this.createPlayer();
                this.createAudioElement();
                this.bindEvents();
                this.updateUI();

                // Cargar un álbum por defecto (puedes cambiarlo)
                this.loadPlaylist('lament');
            }

            createAudioElement() {
                this.audio = new Audio();
                this.audio.volume = this.volume;

                this.audio.addEventListener("ended", () => this.nextTrack());
                this.audio.addEventListener("timeupdate", () => {
                    this.currentTime = this.audio.currentTime;
                    this.updateProgress();
                });
                
                this.audio.addEventListener("loadedmetadata", () => {
                    this.duration = this.audio.duration;
                });
            }

            createPlayer() {
                const playerHTML = `
                    <div class="music-player" id="musicPlayer">
                        <div class="player-header">
                            <div class="player-title">
                                🎵 Lacrimosa
                                <div class="equalizer">
                                    <div class="equalizer-bar"></div>
                                    <div class="equalizer-bar"></div>
                                    <div class="equalizer-bar"></div>
                                    <div class="equalizer-bar"></div>
                                </div>
                            </div>
                            <div class="player-controls-header">
                                <button class="minimize-btn" id="minimizeBtn"></button>
                                <button class="expand-btn" id="expandBtn"></button>
                                <button class="close-btn" id="closeBtn"></button>
                            </div>
                        </div>
                        <div class="player-content">
                            <div class="current-track">
                                <div class="track-artwork" id="trackArtworkContainer">
                                    <img id="trackArtwork" src="/placeholder.svg" alt="Album artwork">
                                    <button class="expand-btn-hover" id="expandBtnHover"></button>
                                </div>
                                <div class="track-info" id="trackInfo">
                                    <div class="track-name" id="trackName"></div>
                                    <div class="track-artist" id="trackArtist"></div>
                                    <div class="track-album" id="trackAlbum"></div>
                                </div>
                            </div>
                            <div class="progress-container">
                                <div class="progress-bar" id="progressBar"><div class="progress-fill" id="progressFill"></div></div>
                                <div class="progress-time">
                                    <span id="currentTime">0:00</span>
                                    <span id="totalTime">0:00</span>
                                </div>
                            </div>
                            <div class="player-controls">
                                <button class="control-btn" id="prevBtn"></button>
                                <button class="control-btn play-pause-btn" id="playPauseBtn"></button>
                                <button class="control-btn" id="nextBtn"></button>
                            </div>
                            <div class="volume-container">
                                <div class="volume-icon"></div>
                                <input type="range" class="volume-slider" id="volumeSlider" min="0" max="100" value="70">
                            </div>
                            <div class="playlist">
                                <div class="playlist-header">Lista del álbum</div>
                                <div id="playlistContainer"></div>
                            </div>
                        </div>
                    </div>
                `;
                document.body.insertAdjacentHTML("beforeend", playerHTML);
                this.playerElement = document.getElementById("musicPlayer");
            }

            bindEvents() {
                document.getElementById("playPauseBtn").addEventListener("click", () => this.togglePlay());
                document.getElementById("prevBtn").addEventListener("click", () => this.previousTrack());
                document.getElementById("nextBtn").addEventListener("click", () => this.nextTrack());

                const minimizeBtn = document.getElementById("minimizeBtn");
                const expandBtn = document.getElementById("expandBtn");
                const expandBtnHover = document.getElementById("expandBtnHover");

                if (minimizeBtn) minimizeBtn.addEventListener("click", (e) => { e.preventDefault(); e.stopPropagation(); this.minimize(); });
                if (expandBtn) expandBtn.addEventListener("click", (e) => { e.preventDefault(); e.stopPropagation(); this.expand(); });
                if (expandBtnHover) expandBtnHover.addEventListener("click", (e) => { e.preventDefault(); e.stopPropagation(); this.expand(); });

                document.getElementById("closeBtn").addEventListener("click", () => this.close());
                document.getElementById("progressBar").addEventListener("click", (e) => this.seekTo(e));
                document.getElementById("volumeSlider").addEventListener("input", (e) => this.setVolume(e.target.value));

                document.addEventListener("click", (e) => {
                    if (e.target.closest(".playlist-item")) {
                        const index = Number.parseInt(e.target.closest(".playlist-item").dataset.index);
                        this.playTrack(index);
                    }
                });
                
                // Eventos para los álbumes
                document.querySelectorAll('.album').forEach(album => {
                    album.addEventListener('click', () => {
                        const albumKey = album.getAttribute('data-album');
                        this.loadPlaylist(albumKey);
                    });
                });
            }

            // Método nuevo para cargar álbum dinámicamente
            loadPlaylist(albumKey) {
                if (!albumPlaylists[albumKey]) return;

                this.playlist = albumPlaylists[albumKey];
                this.currentTrack = 0;
                this.isPlaying = false;
                
                if (this.audio) {
                    this.audio.pause();
                    this.audio.src = "";
                }

                this.updateUI();
                this.playerElement.classList.add("active");
                this.expand(); // Mostrar reproductor grande al cargar álbum
                
                // Reproducir automáticamente la primera canción
                setTimeout(() => this.playTrack(0), 300);
            }

            updateUI() {
                if (this.playlist.length === 0) return;

                const track = this.playlist[this.currentTrack];
                document.getElementById("trackArtwork").src = track.artwork;
                document.getElementById("trackName").textContent = track.name;
                document.getElementById("trackArtist").textContent = track.artist;
                document.getElementById("trackAlbum").textContent = track.album;
                document.getElementById("totalTime").textContent = track.duration;

                const playPauseBtn = document.getElementById("playPauseBtn");
                playPauseBtn.classList.toggle("playing", this.isPlaying);
                this.playerElement.classList.toggle("playing", this.isPlaying);

                this.updatePlaylist();
            }

            updatePlaylist() {
                const container = document.getElementById("playlistContainer");
                container.innerHTML = "";
                this.playlist.forEach((track, index) => {
                    const item = document.createElement("div");
                    item.className = `playlist-item ${index === this.currentTrack ? "active" : ""}`;
                    item.dataset.index = index;
                    item.innerHTML = `
                        <div class="playlist-number">${index + 1}</div>
                        <div class="playlist-track-info">
                            <div class="playlist-track-name">${track.name}</div>
                            <div class="playlist-track-artist">${track.artist}</div>
                        </div>
                        <div class="playlist-track-duration">${track.duration}</div>
                    `;
                    container.appendChild(item);
                });
            }

            togglePlay() {
                if (this.playlist.length === 0) return;

                const track = this.playlist[this.currentTrack];
                if (!this.audio.src && track.audioUrl) {
                    this.audio.src = track.audioUrl;
                    this.audio.load();
                }

                if (this.isPlaying) {
                    this.audio.pause();
                } else {
                    this.audio.play().catch(error => {
                        console.error("Error al reproducir:", error);
                    });
                }
                this.isPlaying = !this.isPlaying;
                this.updateUI();
            }

            playTrack(index) {
                if (index >= 0 && index < this.playlist.length) {
                    const track = this.playlist[index];
                    this.currentTrack = index;
                    this.currentTime = 0;

                    if (track.audioUrl) {
                        this.audio.src = track.audioUrl;
                        this.audio.load();
                        this.audio.play().then(() => {
                            this.isPlaying = true;
                            this.updateUI();
                        }).catch(error => {
                            console.error("Error al reproducir:", error);
                            this.isPlaying = false;
                            this.updateUI();
                        });
                    }
                }
            }

            previousTrack() {
                if (this.playlist.length === 0) return;
                this.currentTrack = this.currentTrack > 0 ? this.currentTrack - 1 : this.playlist.length - 1;
                this.playTrack(this.currentTrack);
            }

            nextTrack() {
                if (this.playlist.length === 0) return;
                this.currentTrack = this.currentTrack < this.playlist.length - 1 ? this.currentTrack + 1 : 0;
                this.playTrack(this.currentTrack);
            }

            seekTo(e) {
                if (this.playlist.length === 0 || !this.audio.src) return;
                const progressBar = e.currentTarget;
                const rect = progressBar.getBoundingClientRect();
                const percent = (e.clientX - rect.left) / rect.width;
                this.audio.currentTime = percent * this.audio.duration;
            }

            setVolume(value) {
                this.volume = value / 100;
                this.audio.volume = this.volume;
            }

            minimize() {
                this.isMinimized = true;
                this.playerElement.classList.add("minimized");
            }

            expand() {
                this.isMinimized = false;
                this.playerElement.classList.remove("minimized");
            }

            close() {
                this.playerElement.classList.remove("active");
                setTimeout(() => {
                    if (this.audio) {
                        this.audio.pause();
                    }
                    this.playerElement.remove();
                }, 300);
            }

            updateProgress() {
                if (this.playlist.length === 0 || !this.audio.src) return;
                const percent = (this.audio.currentTime / this.audio.duration) * 100;
                document.getElementById("progressFill").style.width = `${percent}%`;
                document.getElementById("currentTime").textContent = this.formatTime(this.audio.currentTime);
            }

            formatTime(seconds) {
                if (isNaN(seconds)) return "0:00";
                const mins = Math.floor(seconds / 60);
                const secs = Math.floor(seconds % 60);
                return `${mins}:${secs.toString().padStart(2, "0")}`;
            }
        }

        // 3️⃣ Inicializar reproductor
        document.addEventListener("DOMContentLoaded", () => {
            window.musicPlayer = new MusicPlayer();
            console.log("🎶 Reproductor dinámico inicializado");
        });