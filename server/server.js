const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    port: "3306",
    password: "",
    database: "liftkalkulator"
});

app.post('/login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) return res.status(400).json({ 'message': 'Nedostaje korisničko ime i/ili lozinka.' });

    db.query(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password],
        (err, result) => {

            if(err){
                console.log(err);
                res.send({err: err});
            }
            else if(result.length > 0){
                console.log(result[0].username + " logged in.");
                //res.status = "200";
                res.send(result[0].username);
            }
            else{
                res.status(401).send({message: "Pogrešno korisničko ime/lozinka."});
            }
        }
    );

});

app.post('/projectsList', (req, res) => {

    const username = req.body.username;

    if (!username) return res.status(400).json({ 'message': 'Nedostaje korisničko ime.' });

    db.query(
        "SELECT id, projectName FROM projects WHERE owner = ?",
        [username],
        (err, result) => {

            if(err){
                console.log(err);
                res.send({err: err});
            }
            else if(result){
                // console.log(result[0].username + " logged in.");
                console.log(result);
                //res.status = "200";
                res.send(result);
            }
            else{
                res.status(401).send({message: "Pogrešno korisničko ime/lozinka."});
            }
        }
    );

});

app.post('/getProject', (req, res) => {

    const projectId = req.body.projectId;

    if (!projectId) return res.status(400).json({ 'message': 'Nedostaje projectId.' });

    db.query(
        "SELECT * FROM projects WHERE id = ?",
        [projectId],
        (err, result) => {

            if(err){
                console.log(err);
                res.send({err: err});
            }
            else if(result){
                // console.log(result[0].username + " logged in.");
                console.log(result);
                //res.status = "200";
                res.send(result);
            }
            else{
                res.status(401).send({message: "Pogrešno korisničko ime/lozinka."});
            }
        }
    );

});

app.post('/saveProject', (req, res) => {

    const projectId = req.body.projectId;

    if (!projectId) return res.status(400).json({ 'message': 'Nedostaje projectId.' });

    db.query(
        `UPDATE projects SET
        autor = ?,
        adresaGradAutora = ?,
        izradio = ?,
        suradnik = ?,
        ugraditelj = ?,
        adresaGradUgraditelja = ?,
        nazivGradevine = ?,
        lokacijaAdresaGradevine = ?,
        refOznakaProjekta = ?,
        tvBrojOznakaDizala = ?,

        namjenaDizala = ?,
        ukrcavanjeVilicarem = ?,
        vrstaDizala = ?,
        vrstaPogona = ?,
        smjestajPogona = ?,
        bezStrojarnice = ?,
        faktorOvjesa = ?,
        nazivnaNosivost = ?,
        brojOsoba = ?,
        nazivnaBrzina = ?,
        akceleracijaDeceleracijaNormalnaVoznja = ?,
        deceleracijaKodHitnogStopa = ?,
        brojUkljucenjaNaSat = ?,

        brojPostaja = ?,
        brojUlaza = ?,
        visinaDizanja = ?,
        tlocrtnaSirina = ?,
        tlocrtnaDubina = ?,
        dubinaJame = ?,
        nadvisenje = ?,

        brojNosivihUzadi = ?,
        tipUzadi = ?,
        korisnickoDefiniranje = ?,
        promjer = ?,
        prekidnaCvrstoca = ?,
        masaPoDuljnomMetru = ?,
        youngovModul = ?,

        promjenaSmjeraNaStraniKabine = ?,
        maxRazmakNaStraniKabine = ?,
        npr_c = ?,
        promjenaSmjeraNaStraniProtuutega = ?,
        maxRazmakNaStraniProtuutega = ?,
        npr_cw = ?,
    
        z1 = ?,
        z2 = ?,
        z3 = ?,
        z4 = ?,
        z5 = ?,
        z6 = ?,
        l1 = ?,
        
        otklonskeUzniceNaStraniKabine = ?,
        brojIDP_c = ?,
        promjerDDP_c = ?,
        masaMDP_c = ?,
        inercijaJDP_c = ?,
        
        otklonskeUzniceNaStraniUtega = ?,
        brojIDP_cw = ?,
        promjerDDP_cw = ?,
        masaMDP_cw = ?,
        inercijaJDP_cw = ?,

        vk_brojVodilica = ?,
        vk_ukupnaDuljinaVodilica = ?,
        vk_vertikalniRazmakPrihvataVodilica = ?,
        vk_masaDodatneOpreme = ?,
        vk_ukupnaDodatnaMasa = ?,
        vk_koeficijentDodatnogOpterecenja = ?,
        vk_gubitciUslijedTrenja = ?,
        vk_korisnickoDefiniranjeFRc = ?,
        vk_vrstaVodilice = ?,
        vk_tipVodilice = ?,
        vk_korisnickoDefiniranjeVodilica = ?,
        vk_brojOdbojnika = ?,
        vk_vrstaOdbojnika = ?,

        vk_vlacnaCvrstoca = ?,
        vk_modulElasticnosti = ?,
        vk_elongacija = ?,

        vk_povrsinaPoprecnogPresjeka = ?,
        vk_masaPoJedinicDuzine = ?,
        vk_momentOtporaWxx = ?,
        vk_momentOtporaWyy = ?,
        vk_geometrijskaInercijaLxx = ?,
        vk_geometrijskaInercijaLyy = ?,
        vk_minRadijusInercijeIxx = ?,
        vk_minRadijusInercijeIyy = ?,
        vk_minRadijusInercijeImin = ?,
        vk_vitkost = ?,
        vk_omega = ?,

        vk_b1 = ?,
        vk_h1 = ?,
        vk_h = ?,
        vk_k = ?,
        vk_n = ?,
        vk_c = ?,
        vk_p = ?,
        vk_g = ?,
        vk_f = ?,
        vk_e = ?,
        vk_rs = ?,
        vk_m1 = ?,
        vk_m2 = ?,
        vk_t1 = ?,
        vk_t2 = ?,
        vk_l = ?,
        vk_d = ?,
        vk_d1 = ?,
        vk_b3 = ?,
        vk_l2 = ?,
        vk_l3 = ?

        WHERE id = ?`,
        [
            req.body.autor,
            req.body.adresaGradAutora,
            req.body.izradio,
            req.body.suradnik,
            req.body.ugraditelj,
            req.body.adresaGradUgraditelja,
            req.body.nazivGradevine,
            req.body.lokacijaAdresaGradevine,
            req.body.refOznakaProjekta,
            req.body.tvBrojOznakaDizala,

            //--- DIZALO
            req.body.namjenaDizala,
            req.body.ukrcavanjeVilicarem,
            req.body.vrstaDizala,
            req.body.vrstaPogona,
            req.body.smjestajPogona,
            req.body.bezStrojarnice,
            req.body.faktorOvjesa,
            req.body.nazivnaNosivost,
            req.body.brojOsoba,
            req.body.nazivnaBrzina,
            req.body.akceleracijaDeceleracijaNormalnaVoznja,
            req.body.deceleracijaKodHitnogStopa,
            req.body.brojUkljucenjaNaSat,

            //--- VOZNO OKNO
            req.body.brojPostaja,
            req.body.brojUlaza,
            req.body.visinaDizanja,
            req.body.tlocrtnaSirina,
            req.body.tlocrtnaDubina,
            req.body.dubinaJame,
            req.body.nadvisenje,

            //--- OVJES prvi dio
            req.body.brojNosivihUzadi,
            req.body.tipUzadi,
            req.body.korisnickoDefiniranje,
            req.body.promjer,
            req.body.prekidnaCvrstoca,
            req.body.masaPoDuljnomMetru,
            req.body.youngovModul,

            req.body.promjenaSmjeraNaStraniKabine,
            req.body.maxRazmakNaStraniKabine,
            req.body.npr_c,
            req.body.promjenaSmjeraNaStraniProtuutega,
            req.body.maxRazmakNaStraniProtuutega,
            req.body.npr_cw,

            //--- OVJES drugi dio
            req.body.z1,
            req.body.z2,
            req.body.z3,
            req.body.z4,
            req.body.z5,
            req.body.z6,
            req.body.l1,
            
            req.body.otklonskeUzniceNaStraniKabine,
            req.body.brojIDP_c,
            req.body.promjerDDP_c,
            req.body.masaMDP_c,
            req.body.inercijaJDP_c,
            
            req.body.otklonskeUzniceNaStraniUtega,
            req.body.brojIDP_cw,
            req.body.promjerDDP_cw,
            req.body.masaMDP_cw,
            req.body.inercijaJDP_cw,

            // vodilice kabine PRVI DIO
            req.body.vk_brojVodilica,
            req.body.vk_ukupnaDuljinaVodilica,
            req.body.vk_vertikalniRazmakPrihvataVodilica,
            req.body.vk_masaDodatneOpreme,
            req.body.vk_ukupnaDodatnaMasa,
            req.body.vk_koeficijentDodatnogOpterecenja,
            req.body.vk_gubitciUslijedTrenja,
            req.body.vk_korisnickoDefiniranjeFRc,
            req.body.vk_vrstaVodilice,
            req.body.vk_tipVodilice,
            req.body.vk_korisnickoDefiniranjeVodilica,
            req.body.vk_brojOdbojnika,
            req.body.vk_vrstaOdbojnika,

            // vodilice kabine DRUGI DIO
            req.body.vk_vlacnaCvrstoca,
            req.body.vk_modulElasticnosti,
            req.body.vk_elongacija,

            req.body.vk_povrsinaPoprecnogPresjeka,
            req.body.vk_masaPoJedinicDuzine,
            req.body.vk_momentOtporaWxx,
            req.body.vk_momentOtporaWyy,
            req.body.vk_geometrijskaInercijaLxx,
            req.body.vk_geometrijskaInercijaLyy,
            req.body.vk_minRadijusInercijeIxx,
            req.body.vk_minRadijusInercijeIyy,
            req.body.vk_minRadijusInercijeImin,
            req.body.vk_vitkost,
            req.body.vk_omega,

            // vodilice kabine CETVRTI DIO
            req.body.vk_b1,
            req.body.vk_h1,
            req.body.vk_h,
            req.body.vk_k,
            req.body.vk_n,
            req.body.vk_c,
            req.body.vk_p,
            req.body.vk_g,
            req.body.vk_f,
            req.body.vk_e,
            req.body.vk_rs,
            req.body.vk_m1,
            req.body.vk_m2,
            req.body.vk_t1,
            req.body.vk_t2,
            req.body.vk_l,
            req.body.vk_d,
            req.body.vk_d1,
            req.body.vk_b3,
            req.body.vk_l2,
            req.body.vk_l3,

            projectId
        ],
        (err, result) => {

            if(err){
                console.log(err);
                res.send({err: err});
            }
            else if(result){
                console.log(result);
                res.status = "200";
                res.send();
            }
            else{
                res.status(401).send({message: "Pogrešno korisničko ime/lozinka."});
            }
        }
    );

});

app.post('/newProject', (req, res) => {

    const username = req.body.username;
    const projectName = req.body.projectName;

    if (!username) return res.status(400).json({ 'message': 'Nedostaje username.' });

    db.query(
        "INSERT INTO projects (owner, projectName) VALUES (?, ?)",
        [username, projectName],
        (err, result) => {

            if(err){
                console.log(err);
                res.send({err: err});
            }
            else if(result){
                // console.log(result[0].username + " logged in.");
                console.log(result);
                res.status = "200";
                res.send();
            }
            else{
                res.status(401).send({message: "Pogrešno korisničko ime/lozinka."});
            }
        }
    );

});

app.post('/deleteProject', (req, res) => {

    const projectId = req.body.projectId;

    if (!projectId) return res.status(400).json({ 'message': 'Nedostaje projectId.' });

    db.query(
        "DELETE FROM projects WHERE id = ?",
        [projectId],
        (err, result) => {

            if(err){
                console.log(err);
                res.send({err: err});
            }
            else if(result){
                // console.log(result[0].username + " logged in.");
                console.log(result);
                res.status = "200";
                res.send();
            }
            else{
                res.status(401).send({message: "Pogrešno korisničko ime/lozinka."});
            }
        }
    );

});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

process.on('uncaughtException', err => {
    console.error("Uncaught error: " + err);
    process.exit(1);
});

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    //res.send("Hello Express!");
    //res.sendFile("../lift-kalkulator/public/index.html", {root: __dirname});
    //res.sendFile("./index-test.html", {root: __dirname});
    res.sendFile(path.join(__dirname, "index-test.html"));
});

app.get('/old-page', (req, res) => {
    res.redirect(301, "/index-test.html"); //302 by default
});

app.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, "404.html")); //302 by default
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});