import styles from "./styles.module.css";

function classNames (...args: Array<string | undefined>): string {
    return args.filter(Boolean).join(" ");
}

interface IconProps {
  name?: string;
  color?: string;
  size?: number;
  class?: string;
  style?: React.CSSProperties;
  title?: string
}

export default function Icon(props: IconProps) {
    return (
        <span
            className={classNames("icon", "material-icons-round", styles.icon, props.class)}
            style={{color: props.color, fontSize: props.size + "px", ...props.style}}
            title={props.title}>
            {props.name || "texture"} 
        </span>
    );
}