import Link from "next/link";
import classes from "@/components/links.module.css"

export default function Links() {
    return (
        <ul>
            <li className={classes.listItem}>
                <Link href="/t_circuit">T-Circuit</Link>
            </li>
            <li className={classes.listItem}>
                <Link href="/l_circuit">L-Circuit</Link>
            </li>
            <li className={classes.listItem}>
                <Link href="/pi_circuit">Pi-Circuit</Link>
            </li>
        </ul>
        
    )
}