import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.scss";
import { useEffect, useState, useContext } from "react";

//Image
import google from "@/assets/7611770.png";
import facebook from "@/assets/facebook.png";
import logo from "@/assets/iconsProject/logo.svg";

//Context
import { UserContext } from "@/pages/_app";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState({});
  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem("users")));
  }, []);

  const onHandleEmail = (e) => {
    setEmail(e.target.value);
  };

  const onHandlePassword = (e) => {
    setPassword(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (
      users?.email.toLowerCase() === email.toLowerCase() &&
      users?.password.toLowerCase() === password.toLowerCase()
    ) {
      localStorage.setItem("login", true)
      router.push("/homepage");
    } else {
      alert("incorrect email or password");
    }
  };

  return (
    <>
      <Head>
        <title>Fan Trade/Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.main__header}>
          <Image src={logo} alt="logo" width={70} height={70} />
          <h1 className={styles.main__header__title}>Funtrade</h1>
        </div>
        <div className={styles.main__login}>
          <h2 className={styles.main__login__title}>Accedi</h2>
          <form className={styles.main__login__form} onSubmit={onHandleSubmit}>
            <div className={styles.main__login__form__email}>
              <label htmlFor="email" className={styles.main__login__form__email__label}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={onHandleEmail}
                placeholder="Inserisci la tua email"
                required
                className={styles.main__login__form__email__input}
              />
            </div>
            <div className={styles.main__login__form__password}>
              <label
                htmlFor="password"
                className={styles.main__login__form__password__label}
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={onHandlePassword}
                placeholder="**********"
                required
                className={styles.main__login__form__password__input}
              />
            </div>
            <input
              type="submit"
              name="submit"
              value="Accedi"
              className={styles.main__login__form__submit}
            />
          </form>
          <div className={styles.main__login__link}>
            <div className={styles.main__login__link__title}>
              <h3 className={styles.main__login__link__title__h3}>Oppure accedi con</h3>
            </div>
            <div className={styles.main__login__link__icons}>
              <Image src={google} alt="logo google" width={50} height={50} />
              <Image src={facebook} alt="logo google" width={50} height={50} />
            </div>
          </div>
          <div className={styles.main__login__sing_in}>
            <div className={styles.main__login__sing_in__title}>
              <h3 className={styles.main__login__sing_in__title__h3}>
                Non possiedi un account?
              </h3>
            </div>
            <button className={styles.main__login__sing_in__btn}>
              <Link href="/iscriviti"> Iscriviti </Link>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
