import React, {useState, useEffect} from 'react';
import styles from './Search.module.scss';
import { useRouter } from 'next/router';
import { useStateContext } from '../contexts/StateContextProvider';

const Search = ({searchTerm}) => {
  const router = useRouter();
  const {setSearchTerm, count, setCount} = useStateContext();

  const handleClick = async(e) => {
    e.preventDefault();
    setCount(prevState => prevState + 1);
  }

  const handleRoute = async(route) => {
    
    if(route === 'search'){
      router.push('/search')
    } else if(route === 'images'){
      router.push('/images')
    } else if(route === 'videos'){
      router.push('/videos')
    } else if(route === 'news'){
      router.push('/news')
    } else{
      // nothing
    }
  }

  return(
    <section className={styles.SearchContainer}>
      <form onSubmit={handleClick}>
      <input onSearch={handleClick} type="search" placeholder='Search here....' value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
      </form>
        
        <div className={styles.navLinks}>
          <div onClick={() => handleRoute("search")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M13 8h-8v-1h8v1zm0 2h-8v-1h8v1zm-3 2h-5v-1h5v1zm11.172 12l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"/></svg> <p>All</p>
          </div>
          <div onClick={() => handleRoute("images")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z"/></svg> <p>Images</p>
          </div>
          <div onClick={() => handleRoute("news")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M21.628 15.306l2.372 1.379-12.668 7.315-11.332-6.584 2.372-1.368 8.957 5.206 10.299-5.948zm-10.487-11.438l.017-.003.175.182-.017.003c-.119.023-.216.06-.302.108-.102.06-.125.119-.063.155.062.037.153.023.369-.036.302-.075.518-.069.688.03.181.105.254.3-.111.51-.148.086-.325.142-.422.158l-.017.003-.186-.181.022-.007c.131-.023.273-.072.371-.128.108-.062.137-.125.063-.168-.068-.039-.159-.033-.352.02-.302.089-.541.083-.705-.013-.22-.128-.186-.326.094-.487.119-.07.245-.116.376-.146zm.015 1.357l-.314.181-.964-.382.639.569-.319.185-1.514-.544.318-.184 1.004.405-.678-.592.308-.178.987.395-.679-.573.307-.178.905.896zm-2.326.213l-.468.27.221.128.445-.256.25.145-.445.256.255.149.496-.286.25.145-.799.461-1.224-.712.77-.444.249.144zm-.001 1.13l-.308.178-1.271-.231.833.484-.28.161-1.223-.711.342-.198 1.158.205-.754-.438.279-.161 1.224.711zm6.338-2.183l-7.6 4.389-.629-.366 7.601-4.389.628.366zm1.263.735l-1.898 1.096-.629-.365 1.899-1.097.628.366zm-1.273 2.192l-2.538 1.465-1.887-1.096 2.538-1.465 1.887 1.096zm-4.428 1.1l-1.899 1.096-.629-.366 1.899-1.096.629.366zm6.959-2.561l-1.898 1.096-.629-.366 1.899-1.096.628.366zm-5.702 3.291l-1.899 1.097-.629-.366 1.899-1.096.629.365zm8.225-3.291l-7.551-4.389-10.138 5.853 7.552 4.389 10.137-5.853zm3.789.733l-12.671 7.315-11.329-6.584 12.668-7.315 11.332 6.584zm-11.671 9.047l-1.003.58-1.001-.583-7.968-4.631-2.357 1.36 11.332 6.584 12.668-7.315-2.359-1.372-9.312 5.377z"/></svg> <p>News</p>
          </div>
          <div onClick={() => handleRoute("videos")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M22 14.236v3.528l-2-1v-1.528l2-1zm2-3.236l-6 3v4l6 3v-10zm-10 2v5.5c0 .276-.224.5-.5.5h-9c-.276 0-.5-.224-.5-.5v-5.5c-.702 0-1.373-.127-2-.35v6.35c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2v-6.35c-.627.223-1.298.35-2 .35zm0-8c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm-10 0c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm10-2c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm-10 0c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4z"/></svg> <p>Videos</p>
          </div>
        </div>
    </section>
  );
};

export default Search;
