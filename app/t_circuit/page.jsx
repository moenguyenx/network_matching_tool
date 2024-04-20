"use client";
import Links from "@/components/links";
import { useState, useEffect } from "react";
import Image from "next/image";
import classes from "./page.module.css";
import TCircuitImg from "@/assets/TCircuit.drawio.png";

export default function TCircuit() {
    const [Zin, setZin] = useState(0);
    const [freq, setFreq] = useState(0);
    const [Zload, setZload] = useState(0);
    const [Q, setQ] = useState(0);
    const [L1, setL1] = useState(0);
    const [L2, setL2] = useState(0);
    const [C, setC] = useState(0);
    const [C3, setC3] = useState(0);
    const [C4, setC4] = useState(0);
    const [L, setL] = useState(0);

    useEffect(() => {
      var omega = 2*Math.PI*freq*1e6;
      var Zc = (Math.pow(Q, 2) + 1)*Zload;

      var Qp = Math.sqrt((Zc/Zin)-1);

      // Cal C1, Cs1, L1
      var C1 = Qp/(Zc*omega);
      var Cs1 = ((Math.pow(Qp, 2)+1)/Math.pow(Qp, 2))*C1;
      var calL1 = Math.round((1/(Cs1*Math.pow(omega, 2)))*1e9*100)/100;
      setL1(calL1);

      // Cal L3, Ls3, C3
      var L3 = Zc/(omega*Qp);
      var Ls3 = L3*(Math.pow(Qp, 2)/(Math.pow(Qp, 2)+1));
      var calC3 = Math.round((1/(Ls3*Math.pow(omega, 2)))*1e12*100)/100;
      setC3(calC3);

      // L2, Lc2, C2
      var calL2 = Math.round(((Q*Zload)/omega)*1e9*100)/100;
      setL2(calL2);
      var Lp2 = ((Math.pow(Q, 2) + 1)/Math.pow(Q, 2))*calL2*1e-9;
      var C2 = 1/(Lp2*Math.pow(omega, 2));
      
      // Cal C4, Cp4, L4
      var calC4 = Math.round((1/(Q*Zload*omega))*1e12*100)/100;
      setC4(calC4);
      var Cp4 = (Math.pow(Q, 2)/(Math.pow(Q, 2)+1))*calC4*1e-12;
      var L4 = 1/(Cp4*Math.pow(omega, 2));

      // Cal C, L
      var calC = Math.round((C1 + C2)*1e12*100)/100;
      setC(calC);
      var calL = Math.round(((L3*L4)/(L3+L4))*1e9*100)/100;
      setL(calL);
    }, [Zin, freq, Zload, Q])

    return (
        <>
        <div style={{marginLeft: "6rem"}}>
            <h1>T-Circuit Network Matching</h1>
            <Links/>

            <div className={classes['user-input-area']}>
                <h3>Parameters</h3>
                <div className="">
                  <label className={classes['row-heading']} for="Impedance">Z<sub>in</sub>:</label>
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
                  <label className={classes['row-heading']} for="ZLoad">Z<sub>L</sub>:</label>
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
                      <span className={classes['sum-heading']}>L<sub>1</sub>: </span>
                      <span className={classes['row-value']}>{L1} nH</span>
                    </div>
                    
                    <div className="">
                      <span className={classes['sum-heading']}>L<sub>2</sub>: </span>
                      <span className={classes['row-value']}>{L2} nH</span>
                    </div>

                    <div className="">
                      <span className={classes['sum-heading']}>C: </span>
                      <span className={classes['row-value']}>{C} pF</span>
                    </div>
                    <br />

                        <div className="">
                      <span className={classes['sum-heading']}>C<sub>3</sub>: </span>
                      <span className={classes['row-value']}>{C3} pF</span>
                    </div>
                    <div className="">
                      <span className={classes['sum-heading']}>C<sub>4</sub>: </span>
                      <span className={classes['row-value']}>{C4} pF</span>
                    </div>

                    <div className="">
                      <span className={classes['sum-heading']}>L: </span>
                      <span className={classes['row-value']}>{L} nH</span>
                    </div>
                    <br />
                    <div className="">
                      <span className={classes['sum-heading']}>Z<sub>L</sub>: </span>
                      <span className={classes['row-value']}>{Zload} Ω</span>
                    </div>
                </div>
                <Image src={TCircuitImg} width={400} height={400} />
            </div>
        </div>
        </>
    )
}