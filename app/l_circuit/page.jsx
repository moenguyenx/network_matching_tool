"use client"
import { useState, useEffect } from "react";
import { ZinLessThanZload, ZinMoreThanZload } from "@/components/l_circuit";
import Links from "@/components/links";
import classes from "./page.module.css";


export default function LCircuit() {
    const [Zin, setZin] = useState(0);
    const [freq, setFreq] = useState(0);
    const [Zload, setZload] = useState(0);
    const [invalidInput, setInvalidInput] = useState(false);
    const [L1, setL1] = useState(0);
    const [C1, setC1] = useState(0);
    const [L2, setL2] = useState(0);
    const [C2, setC2] = useState(0);
    const [Z1, setZ1] = useState(0);

    useEffect(() => {
        if (Zin < Zload) {
            setInvalidInput(true);
        } else {
            setInvalidInput(false);
        }
    }, [Zin, Zload]);

    useEffect(() => {
        if (Zin < Zload) {
            // Calculate omega
            setZ1(Zload)
            var omega = 2 * Math.PI * freq * Math.pow(10, 6);
            
            // Calculate Qp
            var Qp = Math.sqrt((Zload - Zin) / Zin);
            
            // Calculate C1
            var calculatedC1 = Math.round((Qp / (Zload * omega)) * 1e12 * 100) / 100;
            setC1(calculatedC1);
            
            // Calculate Cs
            var Cs = ((Math.pow(Qp, 2) + 1) / Math.pow(Qp, 2)) * calculatedC1 * Math.pow(10, -12);
            
            // Calculate L1
            var calculatedL1 = Math.round((1 / (Cs * Math.pow(omega, 2))) * 1e9 * 100)/100;
            setL1(calculatedL1);

            // Calculate L2
            var calculatedL2 = Math.round((Zload/(Qp*omega))*1e9*100)/100;
            setL2(calculatedL2);

            // Calculate Ls
            var Ls = (Math.pow(Qp, 2) / (Math.pow(Qp, 2)+1)) * calculatedL2 * Math.pow(10, -9);

            // Calculate C2
            var calculatedC2 = Math.round((1/(Ls*Math.pow(omega, 2)))*1e12*100)/100;
            setC2(calculatedC2);
            
        } else {
            var omega = 2 * Math.PI * freq * Math.pow(10, 6);
            var Qs = Math.sqrt((Zin - Zload)/Zload);
            setZ1(Zload);

            //Cal L1
            var calL1 = Math.round(((Qs*Zload)/omega)*1e9*100)/100;
            setL1(calL1);

            // Cal Lp
            var Lp = ((Math.pow(Qs, 2) + 1)/Math.pow(Qs, 2))*calL1*Math.pow(10, -9);

            // Cal C1
            var calC1 = Math.round((1/(Lp*Math.pow(omega, 2)))*1e12*100)/100;
            setC1(calC1);

            // Cal C2
            var calC2 = Math.round((1/(Qs*Zload*omega))*1e12*100)/100;
            setC2(calC2);

            // Cal Cp
            var Cp = ((Math.pow(Qs, 2))/(Math.pow(Qs, 2)+1))*calC2*Math.pow(10, -12);

            // Cal L2
            var calL2 = Math.round((1/(Cp*Math.pow(omega, 2)))*1e9*100)/100;
            setL2(calL2);
        }


    }, [Zin, Zload, freq])
    
    return (
        <>
        <div style={{marginLeft: "6rem"}}>
            <h1>L-Circuit Network Matching</h1>
            <Links/>
            <div className={classes['user-input-area']}>
                <h3>Parameters</h3>
                <div class="">
                  <label className={classes['row-heading']} for="Impedance">Z<sub>in</sub>:</label>
                  <input className={classes['row-data']} id="Impedance" value={Zin} onChange={(e) => {
                                                                                            const newValue = e.target.value;
                                                                                            if (!isNaN(newValue) && newValue !== "") {
                                                                                                setZin(parseFloat(newValue));
                                                                                            } else {
                                                                                                setZin(newValue);
                                                                                            }
                                                                                            }}/>
                  <span className={classes['row-units']}> Ω </span>
                  <span className={classes['row-range']}>(0 &lt; Z<sub>o</sub> &lt;= 10000)</span>
                </div>
                <div class="">
                  <label className={classes['row-heading']} for="Frequency">Frequency:</label>
                  <input className={classes['row-data']} id="Frequency" value={freq} onChange={(e) => {
                                                                                            const newValue = e.target.value;
                                                                                            if (!isNaN(newValue) && newValue !== "") {
                                                                                                setFreq(parseFloat(newValue));
                                                                                            } else {
                                                                                                setFreq(newValue);
                                                                                            }
                                                                                            }}/>
                  <span className={classes['row-units']}> MHz </span>
                  <span className={classes['row-range']}>(0 &lt; F<sub>o</sub> &lt;= 20000)</span>
                </div>
                <div class="">
                  <label className={classes['row-heading']} for="ZLoad">Z<sub>L</sub>:</label>
                  <input className={classes['row-data']} id="ZLoad" value={Zload} onChange={(e) => {
                                                                                            const newValue = e.target.value;
                                                                                            if (!isNaN(newValue) && newValue !== "") {
                                                                                                setZload(parseFloat(newValue));
                                                                                            } else {
                                                                                                setZload(newValue);
                                                                                            }
                                                                                            }}/>
                  <span className={classes['row-units']}>  </span>
                  <span className={classes['row-range']}>Ω (0 &lt; Z<sub>L</sub> &lt;= 10000)</span>
                </div>
            </div>

            <div className={classes['results-area']}>
                <div className={classes['output-summary']}>
                    <h3>Outputs</h3>
                    <div class="">
                      <span className={classes['sum-heading']}>L<sub>1</sub>: </span>
                      <span className={classes['row-value']}>{L1} nH</span>
                    </div>
                        <div class="">
                      <span className={classes['sum-heading']}>C<sub>1</sub>: </span>
                      <span className={classes['row-value']}>{C1} pF</span>
                    </div>
                        <div class="">
                      <span className={classes['sum-heading']}>Z<sub>L</sub>: </span>
                      <span className={classes['row-value']}>{Z1} Ω</span>
                    </div>
                            <div class="">
                      <span className={classes['sum-heading']}>C<sub>2</sub>: </span>
                      <span className={classes['row-value']}>{C2} pF</span>
                    </div>
                        <div class="">
                      <span className={classes['sum-heading']}>L<sub>2</sub>: </span>
                      <span className={classes['row-value']}>{L2} nH</span>
                    </div>

                    
                </div>
                {invalidInput ?
                    <ZinLessThanZload L1={L1} C1={C1} L2={L2} C2={C2} Z1={Z1} /> :
                    <ZinMoreThanZload L1={L1} C1={C1} L2={L2} C2={C2} Z1={Z1} />
                }
            </div>
                
            </div>
        </>
    )
}