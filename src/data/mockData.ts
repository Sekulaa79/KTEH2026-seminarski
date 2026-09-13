import { IDestination } from '../models/Destination';
import nisSlika from '../images/nis.jpg';
import prizrenSlika from '../images/prizrenpravi.jpg';
import pecSlika from '../images/pec.jpg';
import gracanicaSlika from '../images/gracanica.jpg';
import noviSadSlika from '../images/novisad.jpg';
import zlatiborSlika from '../images/zlatibor.jpg';
import kragujevacSlika from '../images/kragujevac.jpg';
import somborSlika from '../images/sombor.jpg';
import uvacSlika from '../images/uvac.jpg';
import djerdapSlika from '../images/djerdap.jpg';
import oplenacSlika from '../images/oplenac.jpg';


export const sveDestinacije: IDestination[] = [
  { id: '1', naziv: 'Nis', region: 'Istok', cena: 50, trajanje: 3, slika: nisSlika, opis: 'Niš je najveći grad u jugoistočnoj Srbiji. Poznat je po bogatoj istoriji, tvrđavi i odličnoj hrani.' },
  { id: '2', naziv: 'Prizren', region: 'Kosovo', cena: 120, trajanje: 5, slika: prizrenSlika, opis: 'Prizren je jedan od najlepših gradova, smešten na obalama reke Bistrice, poznat po starom gradu i Šadrvanu.' },
  { id: '3', naziv: 'Pec', region: 'Kosovo', cena: 80, trajanje: 2, slika: pecSlika, opis: 'Peć je grad bogat kulturnim nasleđem, a u neposrednoj blizini se nalazi prelepa Rugovska klisura.' },
  { id: '4', naziv: 'Gracanica', region: 'Kosovo', cena: 40, trajanje: 1, slika: gracanicaSlika, opis: 'Gračanica je poznata po istoimenom manastiru koji predstavlja remek-delo srpske srednjovekovne arhitekture.' },
  { id: '5', naziv: 'Novi Sad', region: 'Vojvodina', cena: 150, trajanje: 4, slika: noviSadSlika, opis: 'Novi Sad, Srpska Atina, očaraće vas Petrovaradinskom tvrđavom i šetnjom pored Dunava.' },
  { id: '6', naziv: 'Zlatibor', region: 'Zapad', cena: 200, trajanje: 7, slika: zlatiborSlika, opis: 'Zlatibor je najpoznatija planina za odmor u Srbiji, nudi čist vazduh i pregršt aktivnosti u prirodi.' },
  { id: '7', naziv: 'Kragujevac', region: 'Sumadija', cena: 60, trajanje: 2, slika: kragujevacSlika, opis: 'Kragujevac je srce Šumadije i prva prestonica moderne Srbije, grad bogat istorijskim spomenicima.' },
  { id: '8', naziv: 'Sombor', region: 'Vojvodina', cena: 100, trajanje: 3, slika: somborSlika, opis: 'Sombor je poznat po mirnoj vojvođanskoj atmosferi, širokim ulicama, zelenilu i prelepim drvoredima koji mu daju poseban šarm.' },
  { id: '9', naziv: 'Uvac', region: 'Zapad', cena: 35, trajanje: 2, slika: uvacSlika, opis: 'Uvac je prirodni biser Srbije, poznat po svojim vijugavim meandrima, strmim liticama i netaknutoj prirodi koja pruža nezaboravan pogled.' },
  { id: '10', naziv: 'Djerdap', region: 'Istok', cena: 30, trajanje: 2, slika: djerdapSlika, opis: 'Đerdap je najveća klisura u Evropi, koja svojim moćnim Dunavom, strmim stenama i bogatom prirodom predstavlja jedno od najlepših mesta u Srbiji.' },
  { id: '11', naziv: 'Oplenac', region: 'Sumadija', cena: 20, trajanje: 1, slika: oplenacSlika, opis: ' Oplenac je poznat po svojoj istoriji, vinogradima i veličanstvenom kompleksu koji čuva važne spomenike srpske kulture i tradicije.' }
];