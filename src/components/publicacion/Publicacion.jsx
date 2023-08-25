import  { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Importa SweetAlert
import './style.scss';

const Publicacion = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Realizar una solicitud GET a la URL de los posts en la base de datos externa
    axios.get('http://localhost:3000/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos de los posts:', error);
      });
  }, []);

  const handleLike = (postId) => {
    // Cambiar el color del ícono y mostrar la alerta
    Swal.fire({
      title: 'Me gusta!',
      text: 'Le diste me gusta a esta publicación.',
      icon: 'success',
      timer: 5000, 
      showConfirmButton: false,
    });
  };

  return (
    <div className='posts'>
      {posts.map(post => (
        <div className='info' key={post.id}>
          <div className='infoUser'>
            <img src={post.profileImage} alt="" />
            <h3>{post.username}</h3>
          </div>
          <div className="img">
            <img src={post.image} alt="" />
          </div>
          <div className='iconos'>
            <div className='interacion'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className={`heart ${post.isLiked ? 'liked' : ''}`}
                viewBox="0 0 16 16"
                onClick={() => handleLike()}
              >
                <path
                  d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg>
              <svg 
              xmlns="http://www.w3.org/2000/svg"
              width="30" 
              height="30"
              fill="currentColor"
              className='chat' 
              viewBox="0 0 16 16">
                <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/></svg>
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="30" 
              height="30" 
              fill="currentColor" 
              className='envio' 
              viewBox="0 0 16 16">
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/></svg>
            </div>
              <svg 
              xmlns="http://www.w3.org/2000/svg"
              width="30" 
              height="30"
              fill="currentColor" 
              className='guardado' 
              viewBox="0 0 16 16"> 
              <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/></svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Publicacion;
