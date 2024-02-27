import Link from 'next/link';
import Image from 'next/image'
import styles from "@/styles/Timeline.module.css";
import { Caudex } from "next/font/google";
import { useState } from 'react';

const caudex = Caudex({subsets: ['latin'], weight: '400'})

export default function timelineinfo({e, setinfo}) {
    return <div className={[styles.infocontainer, caudex.className].join(" ")} onClick={()=>{setinfo(0)}}>

    {e ==  1 && <div className={styles.infoconcontainer}>
      <h1 className={styles.infotitle}> The Singularity </h1>
      <div className={styles.infotext}> The beginning of the Runiverse. </div>
    </div>}
    {e ==  2 && <div className={styles.infoconcontainer}>
      <h1 className={styles.infotitle}> Runes Renaissance </h1>
      <div className={styles.infotext}> The beginning of the Runiverse. </div>
    </div>}
    {e ==  3 && <div className={styles.infoconcontainer}>
      <h1 className={styles.infotitle}> Rumors of the Quantum Shadow </h1>
      <div className={styles.infotext}> The beginning of the Runiverse. </div>
    </div>}
    {e ==  4 && <div className={styles.infoconcontainer}>
      <h1 className={styles.infotitle}> Factions Form </h1>
      <div className={styles.infotext}> The beginning of the Runiverse. </div>
    </div>}
    {e ==  5 && <div className={styles.infoconcontainer}>
      <h1 className={styles.infotitle}> The Cult is born </h1>
      <div className={styles.infotext}> The beginning of the Runiverse. </div>
    </div>}
    {e ==  6 && <div className={styles.infoconcontainer}>
      <h1 className={styles.infotitle}> The Great Burning </h1>
      <div className={styles.infotext}> The beginning of the Runiverse. </div>
    </div>}
    {e ==  7 && <div className={styles.infoconcontainer}>
      <h1 className={styles.infotitle}> The Gate to the Seventh realm is opened </h1>
      <div className={styles.infotext}> The beginning of the Runiverse. </div>
    </div>}
    {e ==  8 && <div className={styles.infoconcontainer}>
      <h1 className={styles.infotitle}> Shadows are unleashed </h1>
      <div className={styles.infotext}> The beginning of the Runiverse. </div>
    </div>}

    </div>
  }