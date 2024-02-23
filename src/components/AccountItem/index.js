import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <imgage
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/eaf105ee95f5e9be121fdc7eaba4a4e1~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1708682400&x-signature=lo2ZV7NCYSjey6%2Fz9xkXHN%2F%2BRSU%3D"
                alt="anh123"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Ronal Siu</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;