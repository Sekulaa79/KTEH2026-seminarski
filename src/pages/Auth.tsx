import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { AppContext } from '../context/AppContext';
import { AuthService } from '../models/User';

interface Props {
  isRegister?: boolean;
}

const authService = new AuthService();

const Auth: React.FC<Props> = ({ isRegister }) => {
  const [ime, setIme] = useState('');
  const [email, setEmail] = useState('');
  const [lozinka, setLozinka] = useState('');
  
  const { postaviKorisnika } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (isRegister) {
      if (!ime || !email || !lozinka) return alert("Popunite sva polja!");
      const noviKorisnik = { ime, email, lozinka };
      authService.register(noviKorisnik);
      postaviKorisnika(noviKorisnik);
      alert("Uspešna registracija!");
      navigate('/');
    } else {
      if (!email || !lozinka) return alert("Popunite sva polja!");
      const ulogovan = authService.login(email, lozinka);
      if (ulogovan) {
        postaviKorisnika(ulogovan);
        alert("Uspešna prijava!");
        navigate('/');
      } else {
        alert("Pogrešan email ili lozinka (ili nalog ne postoji)!");
      }
    }
  };

  return (
    <div style={{ display: 'flex', height: '89.5vh', overflow: 'hidden' }}>
      <div style={{ flex: 1, backgroundColor: '#e8efe9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="https://picsum.photos/600/800?random=10" alt="Priroda" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
        {isRegister && (
          <CustomInput placeholder="Ime" value={ime} onChange={(e) => setIme(e.target.value)} />
        )}
        <CustomInput placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <CustomInput placeholder="Lozinka" type="password" value={lozinka} onChange={(e) => setLozinka(e.target.value)} />
        
        <div style={{ marginTop: '20px' }}>
          <CustomButton text={isRegister ? "REGISTRACIJA" : "PRIJAVI SE"} onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Auth;