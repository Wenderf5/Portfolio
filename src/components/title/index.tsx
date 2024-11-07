import style from './index.module.css';

interface props {
    title: string;
}

export function Title({ title }: props) {
    return (
        <div className={style.ttl_about}>
            <svg width="55" height="20" viewBox="0 0 61 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="54" height="4" rx="2" fill="#00AD6F" fill-opacity="0.58"></rect><rect y="16" width="54" height="4" rx="2" fill="#00AD6F" fill-opacity="0.58"></rect><rect x="7" y="8" width="54" height="4" rx="2" fill="#00AD6F" fill-opacity="0.58"></rect></svg>
            <h2>{title}</h2>
            <svg width="55" height="20" viewBox="0 0 61 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="54" height="4" rx="2" fill="#00AD6F" fill-opacity="0.58"></rect><rect y="16" width="54" height="4" rx="2" fill="#00AD6F" fill-opacity="0.58"></rect><rect x="7" y="8" width="54" height="4" rx="2" fill="#00AD6F" fill-opacity="0.58"></rect></svg>
        </div>
    )
}