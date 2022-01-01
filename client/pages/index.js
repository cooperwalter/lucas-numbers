import React from "react";
import Head from "next/head";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "../styles/Home.module.css";
import * as api from "../services/api";

export default function Home() {
  const [lucasNumber, setLucasNumber] = React.useState(undefined);
  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    const number = await api.fetchLucasNumber(values.n);
    console.log("number", number);
    setLucasNumber(number);
    setSubmitting(false);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Lucas Numbers Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Formik
        initialValues={{ n: "" }}
        validate={(values) => {
          const errors = {};
          const parsed = parseInt(values.n);
          if (!values.n) {
            errors.n = "n is required";
          } else if (!Number.isInteger(parsed)) {
            errors.n = "n must be an integer";
          } else if (parsed < 0) {
            errors.n = "n must be positive";
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="n" />
            <ErrorMessage name="n" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <div>Lucas Number: {lucasNumber}</div>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js</a> on Docker!
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
