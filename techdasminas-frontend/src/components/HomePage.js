import React from 'react';
import { auth, googleProvider, signInWithPopup } from '../firebaseConfig';

const HomePage = () => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log(user); 
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <div className="home-page d-flex justify-content-end align-items-center">
      <div className="text-right mr-5">
        <h1>Bem-vinda ao Tech das Minas</h1>
        <p>Faça login para acessar o site.</p>
        <button onClick={handleLogin} className="btn btn-primary">Login com Google</button>
      </div>
      <div className="images">
        <img src={`${process.env.PUBLIC_URL}/imagem-girls-in-tech.png`} alt="Imagem girls in tech" className="img-fluid" />
      </div>
    </div>
  );
};

export default HomePage;
