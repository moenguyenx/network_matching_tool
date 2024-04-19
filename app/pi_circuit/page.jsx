"use client";
import Links from "@/components/links";
import { useState } from "react";
import classes from "./page.module.css";

export default function PiCircuit() {
    const [Zin, setZin] = useState(0);
    const [freq, setFreq] = useState(0);
    const [Zload, setZload] = useState(0);
    const [Q, setQ] = useState(0);

    return (
        <>
        <div style={{marginLeft: "4rem"}}>
            <h1>Pi-Circuit Network Matching</h1>
            <Links/>

            <div className={classes['user-input-area']}>
                <h3>Parameters</h3>
                <div className="">
                  <label className={classes['row-heading']} for="Impedance">Z-in:</label>
                  <input className={classes['row-data']} id="Impedance" value={Zin} onChange={(e) => setZin(e.target.value)}/>
                  <span className={classes['row-units']} > Ω </span>
                  <span className={classes['row-range']}>(0 &lt; Z<sub>o</sub> &lt;= 1000)</span>
                </div>
                <div className="">
                  <label className={classes['row-heading']} for="Frequency">Frequency:</label>
                  <input className={classes['row-data']}  id="Frequency" value={freq} onChange={(e) => setFreq(e.target.value)}/>
                  <span className={classes['row-units']} > MHz </span>
                  <span className={classes['row-range']}>(0 &lt; F<sub>o</sub> &lt;= 20000)</span>
                </div>
                <div className="">
                  <label className={classes['row-heading']} for="ZLoad">Z-load:</label>
                  <input className={classes['row-data']}  id="ZLoad" value={Zload} onChange={(e) => setZload(e.target.value)}/>
                  <span className={classes['row-units']}>  </span>
                  <span className={classes['row-range']}>Ω (0 &lt; R<sub>L</sub> &lt;= 20000)</span>
                </div>
                <div className="">
                  <label className={classes['row-heading']} for="Q">Q:</label>
                  <input className={classes['row-data']}  id="Q" value={Q} onChange={(e) => setQ(e.target.value)}/>
                  <span className={classes['row-units']} >  </span>
                  <span className={classes['row-range']}> (Q &gt;= 1)</span>
                </div>
            </div>

            <div className={classes['results-area']}>
                <div className={classes['output-summary']}>
                    <h3>Outputs</h3>
                    <div className="">
                      <span className={classes['sum-heading']}>L1: </span>
                      <span className={classes['row-value']}> nH</span>
                    </div>
                        <div className="">
                      <span className={classes['sum-heading']}>C1: </span>
                      <span className={classes['row-value']}> pF</span>
                    </div>
                        <div className="">
                      <span className={classes['sum-heading']}>Z1: </span>
                      <span className={classes['row-value']}></span>
                    </div>
                            <div className="">
                      <span className={classes['sum-heading']}>C2: </span>
                      <span className={classes['row-value']}>pF</span>
                    </div>
                        <div className="">
                      <span className={classes['sum-heading']}>L2: </span>
                      <span className={classes['row-value']}> nH</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}