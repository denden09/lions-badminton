import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import '../pages/Home.css'; // Path CSS
import badminton1 from '../assets/main.jpg';
import badminton2 from '../assets/badminton2.jpg';
import badminton3 from '../assets/badminton3.jpg';
import ketua from '../assets/ketua.png';
import logo from '../assets/lionslogo.png';
import sponsor from '../assets/itoen.png';

const Home = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [members, setMembers] = useState([]);

  // Mengambil data dari API backend
  useEffect(() => {
    fetch('http://localhost:8000/api/announcement.php') // URL backend API
      .then((response) => {
        if (!response.ok) {
          throw new Error('Gagal mengambil data');
        }
        return response.json();
      })
      .then((data) => setAnnouncements(data))
      .catch((error) => console.error('Error fetching announcements:', error));
  }, []);

  // Fetch members
  useEffect(() => {
    fetch('http://localhost:8000/api/members.php')
      .then((response) => response.json())
      .then((data) => setMembers(data))
      .catch((error) => console.error('Error fetching members:', error));
  }, []);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="home-container">
      {/* Slider Section */}
      <div className="slider-wrapper">
        <Slider {...settings} className="slider-container">
          <div>
            <img src={badminton1} alt="Slide 1" />
          </div>
          <div>
            <img src={badminton2} alt="Slide 2" />
          </div>
          <div>
            <img src={badminton3} alt="Slide 3" />
          </div>
        </Slider>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h1>Lions Badminton</h1>
        <p>
          Lions Badminton merupakan Unit Kegiatan Mahasiswa (UKM) yang <br />
          menghimpun mahasiswa UMN dalam bidang olahraga bulutangkis. UKM ini <br />
          telah mencetak mahasiswa berprestasi yang siap dikirim bertanding ke luar <br />
          kampus. Lion Badminton juga menyediakan pelatih untuk setiap anggota <br />
          UKM agar dapat mengasah keahliannya lebih dalam lagi pada cabang olahraga ini.
        </p>
      </div>

      {/* Slogan Section */}
      <div className="slogan-section">
        <h3>"Good Health and Well-Being"</h3>
      </div>

      {/* Visi & Misi Section */}
      <div className="visi-misi-wrapper">
        <div className="half-background">
          <div className="visi-section">
            <h1>Visi</h1>
            <p>
              Memberikan wadah bagi anggota Lion Badminton <br />
              untuk menyalurkan dan mengembangkan bakat <br />
              serta potensi dalam olahraga bulutangkis.
            </p>
          </div>

          <div className="misi-section">
            <h1>Misi</h1>
            <p>
              1. Memperluas relasi antar penggemar bulutangkis.<br />
              2. Mengoptimalkan kualitas pembinaan dan pelatihan <br />
              kepada seluruh anggota UKM Lion Badminton.<br />
              3. Menumbuhkan jiwa atlet yang bermental kuat dalam <br />
              anggota UKM Lion Badminton.
            </p>
          </div>
        </div>
      </div>

      {/* YouTube Video Section */}
      <div className="video-container">
      <h1>Mini Vlog</h1>
        <iframe
          src="https://www.youtube.com/embed/E_RLhCwEEns?si=ZaSqZ0Mo4xLishsT"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="bottom-back">
        <div className="bottom-home">
          <h1>Sponsored by : </h1>
          <div className='logo-sponsor'>
          <img src={logo} alt="UKM Badminton" className='logo-badmin'/>
          <img src={sponsor} alt="sponsor" className='logo-sponsor'/>
          </div>

          <h1>©Lions Badminton</h1>
          <p>
            Universitas Multimedia Nusantara<br />
            Jalan Scientia Boulevard Gading, Curug Sangereng, Serpong, Kabupaten Tangerang, Banten 15810
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
