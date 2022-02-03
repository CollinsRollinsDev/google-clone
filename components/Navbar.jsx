import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import Search from "./Search";
import { useRouter } from "next/router";

const Navbar = ({ searchTerm }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/search");
  };

  return (
    <>
      <section className={styles.NavbarContainer}>
        <Link href="/search" passHref>
          <div onClick={handleClick} className={styles.siteName}>
            <p>CR-Search!</p>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path d="M19.286 6.368c-1.81-3.297-5.638-2.898-7.286-.36-1.647-2.538-5.476-2.937-7.286.36-3.713 6.761-4.714 8.339-4.714 9.83 0 2.233 1.968 3.802 3.97 3.802 2.459 0 3.53-2.124 5.093-4.841.639 1.23 1.789 1.835 2.938 1.833 1.148.002 2.299-.602 2.938-1.833 1.561 2.717 2.632 4.841 5.091 4.841 2.002 0 3.97-1.569 3.97-3.802 0-1.491-1.001-3.069-4.714-9.83zm-15.316 11.633c-1.106 0-2.008-.896-2.008-1.999 0-1.102.901-1.999 2.008-1.999s2.008.896 2.008 1.999c0 1.102-.902 1.999-2.008 1.999zm8.03-2.999c-.552 0-1-.447-1-.999s.448-1 1-1 1 .447 1 1c0 .552-.448.999-1 .999zm8.03 2.999c-1.106 0-2.008-.896-2.008-1.999 0-1.102.901-1.999 2.008-1.999s2.008.896 2.008 1.999c0 1.102-.901 1.999-2.008 1.999z" />
            </svg>
          </div>
        </Link>
        <Search searchTerm={searchTerm} />
      </section>
    </>
  );
};

export default Navbar;
