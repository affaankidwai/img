import Head from "next/head";
import Image from "next/image";
import ImageGenerator from "../assets/ImageGenerator";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <ImageGenerator />
    </div>
  );
}
