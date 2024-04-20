"use client";
import Links from "@/components/links";
import { useState, useEffect } from "react";
import Image from "next/image";
import classes from "./page.module.css";
import PiCircuitImg from "@/assets/PiCircuit.drawio.png";

export default function PiCircuit() {
    const [Zin, setZin] = useState(0);
    const [freq, setFreq] = useState(0);
    const [Zload, setZload] = useState(0);
    const [Q, setQ] = useState(0);
    const [C, setC] = useState(0);
    const [C1, setC1] = useState(0);
    const [C2, setC2] = useState(0);
    const [L, setL] = useState(0);
    const [L3, setL3] = useState(0);
    const [L4, setL4] = useState(0);

    useEffect(() => {
      var omega = 2*Math.PI*freq*1e6;

      // Cal Zcenter
      var Zc = (1/(Math.pow(Q, 2)+1))*Zin;

      // Cal L1, Lp1, C1
      var L1 = ((Q*Zc)/omega);
      var Lp1 = ((Math.pow(Q, 2) + 1)/Math.pow(Q, 2))*L1;
      var calC1 = Math.round((1/(Lp1*Math.pow(omega, 2)))*1e12*100)/100;
      setC1(calC1);

      // Cal C3, Cp3, L3
      var C3 = 1/(Q*Zc*omega);
      var Cp3 =  (Math.pow(Q, 2)/(Math.pow(Q, 2)+1))*C3;
      var calL3 = Math.round((1/(Cp3*Math.pow(omega, 2)))*1e9*100)/100;
      setL3(calL3)

      // Cal Qp, C2, Cs2, 
      var Qp = Math.sqrt((Zload/Zc)-1);

      var calC2 = Math.round((Qp/(Zload*omega))*1e12*100)/100;
      setC2(calC2);
      var Cs2 = ((Math.pow(Qp,2)+1)/Math.pow(Qp,2))*calC2*1e-12;
      var L2 = (1/(Cs2*Math.pow(omega,2)));

      var calL4 = Math.round((Zload/(Qp*omega))*1e9*100)/100;
      setL4(calL4);
      var Ls4 = (Math.pow(Qp,2)/(Math.pow(Qp,2)+1))*calL4*1e-9;
      var C4 = (1/(Ls4*Math.pow(omega,2)));

      var calL = Math.round((L1+L2)*1e9*100)/100;
      setL(calL);
      var calC = Math.round((C3*C4)/(C3+C4)*1e12*100)/100;
      setC(calC);
      
    }, [Zin, Zload, freq, Q])

    return (
        <>
        <div style={{marginLeft: "6rem"}}>
            <h1>Pi-Circuit Network Matching</h1>
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
                      <span className={classes['sum-heading']}>L: </span>
                      <span className={classes['row-value']}>{L} nH</span>
                    </div>
                        <div className="">
                      <span className={classes['sum-heading']}>C<sub>1</sub>: </span>
                      <span className={classes['row-value']}>{C1} pF</span>
                    </div>
                    <div className="">
                      <span className={classes['sum-heading']}>C<sub>2</sub>: </span>
                      <span className={classes['row-value']}>{C2} pF</span>
                    </div>
                    <br />
                    
                    <div className="">
                      <span className={classes['sum-heading']}>C: </span>
                      <span className={classes['row-value']}>{C} pF</span>
                    </div>
                    <div className="">
                      <span className={classes['sum-heading']}>L<sub>3</sub>: </span>
                      <span className={classes['row-value']}>{L3} nH</span>
                    </div>
                    
                    <div className="">
                      <span className={classes['sum-heading']}>L<sub>4</sub>: </span>
                      <span className={classes['row-value']}>{L4} nH</span>
                    </div>
                    <br />
                        <div className="">
                      <span className={classes['sum-heading']}>Z<sub>L</sub>: </span>
                      <span className={classes['row-value']}>{Zload} Ω</span>
                    </div>
                </div>
                <Image src={PiCircuitImg} height={400} width={400} />
            </div>
        </div>
        </>
    )
}