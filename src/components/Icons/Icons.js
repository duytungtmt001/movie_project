import styles from './Icons.module.scss';
import classNames from 'classnames/bind';

import { memo } from 'react';

const cx = classNames.bind(styles);

export const AnnouncementIcon = ({ width = '3rem', height = '3rem', className }) => (
    <svg
        width={width}
        height={height}
        className={cx('icon', { [className]: className })}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12.036 2h-.071c-3.37 0-6.458 2.445-6.758 5.681-.02.231-.034.468-.043.723L5.152 9l-.002.534.015-.06a3.85 3.85 0 01-.928 1.82l-.068.086a4.08 4.08 0 00-.667 2.044l-.001.238a4.07 4.07 0 00.926 2.66 4.874 4.874 0 003.086 1.525c2.977.323 5.989.323 8.974-.001a4.799 4.799 0 003.047-1.488 4.076 4.076 0 00.965-2.496l.001-.403a4.013 4.013 0 00-.671-2.074l-.062-.08-.15-.177a3.93 3.93 0 01-.727-1.431l-.045-.187-.01-.196a11.22 11.22 0 01-.004-.309v-.673a7.874 7.874 0 00-.028-.647C18.493 4.443 15.403 2 12.036 2zm-.071 1.395h.071c2.698 0 5.158 1.946 5.395 4.418.014.163.02.317.022.548l.003.904c.003.145.008.265.018.4l.013.093.065.276c.192.73.537 1.41 1.013 1.997l.138.162-.016-.026c.264.394.414.852.435 1.323v.164a2.653 2.653 0 01-.614 1.773 3.418 3.418 0 01-2.157 1.03 40.271 40.271 0 01-8.7.001 3.485 3.485 0 01-2.197-1.065 2.656 2.656 0 01-.575-1.716v-.218l.018-.19a2.67 2.67 0 01.313-.94l.084-.139a5.25 5.25 0 001.22-2.433l.015-.142.006-.92.016-.466c.008-.147.017-.287.029-.422.228-2.466 2.687-4.412 5.385-4.412zm2.643 16.296a.684.684 0 00-.97.106c-.102.13-.222.247-.355.347a2.138 2.138 0 01-1.577.446 2.117 2.117 0 01-1.413-.79.684.684 0 00-.969-.111.703.703 0 00-.11.98 3.495 3.495 0 004.902.586c.217-.163.42-.362.597-.584a.704.704 0 00-.105-.98z"
            fill="currentColor"
            fillRule="evenodd"
        ></path>
    </svg>
);

export const SearchIcon = memo(({ width = '3rem', height = '3rem', className }) => {
    return (
        <svg
            width={width}
            height={height}
            className={cx('icon', { [className]: className })}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11 2a9 9 0 017.032 14.617l3.675 3.676a1 1 0 01-1.32 1.497l-.094-.083-3.676-3.675A9 9 0 1111 2zm0 2a7 7 0 104.865 12.033.732.732 0 01.078-.09l.09-.078A7 7 0 0011 4z"
                fill="currentColor"
                fillRule="evenodd"
            ></path>
        </svg>
    );
});

export const BackIcon = ({ width = '3rem', height = '3rem', className }) => (
    <svg
        className={cx('icon', { [className]: className })}
        width={width}
        height={height}
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.58579 22.5858L20.8787 6.29289C21.2692 5.90237 21.9024 5.90237 22.2929 6.29289L23.7071 7.70711C24.0976 8.09763 24.0976 8.7308 23.7071 9.12132L8.82843 24L23.7071 38.8787C24.0976 39.2692 24.0976 39.9024 23.7071 40.2929L22.2929 41.7071C21.9024 42.0976 21.2692 42.0976 20.8787 41.7071L4.58579 25.4142C3.80474 24.6332 3.80474 23.3668 4.58579 22.5858Z"
        ></path>
    </svg>
);

export const AccountIcon = ({ width = '3rem', height = '3rem', className }) => (
    <svg
        className={cx('icon', { [className]: className })}
        width={width}
        height={height}
        viewBox="0 0 20 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g id="layer1">
            <path
                d="M 10 0 L 9.5644531 0.01953125 L 9.1328125 0.076171875 L 8.7050781 0.16992188 L 8.2890625 0.30273438 L 7.8867188 0.46875 L 7.5 0.66992188 L 7.1328125 0.90625 L 6.7871094 1.171875 L 6.4628906 1.4648438 L 6.1699219 1.7871094 L 5.9042969 2.1328125 L 5.6699219 2.5 L 5.46875 2.8886719 L 5.3027344 3.2910156 L 5.1699219 3.7070312 L 5.0761719 4.1328125 L 5.0195312 4.5664062 L 5 5.0019531 L 5.0175781 5.6816406 L 5.0742188 6.359375 L 5.1660156 7.0351562 L 5.2949219 7.703125 L 5.4589844 8.3613281 L 5.6601562 9.0136719 L 5.8984375 9.6523438 L 6.1660156 10.275391 L 6.4707031 10.884766 L 6.6523438 11.193359 L 6.8632812 11.484375 L 6.9296875 11.595703 L 6.9648438 11.720703 L 6.96875 11.847656 L 6.9375 11.974609 L 6.875 12.087891 L 6.7871094 12.181641 L 6.6777344 12.25 L 6.5527344 12.287109 L 5.6953125 12.449219 L 4.84375 12.646484 L 4.0019531 12.878906 L 3.1699219 13.146484 L 2.3515625 13.445312 L 2.0351562 13.591797 L 1.7382812 13.771484 L 1.4648438 13.986328 L 1.2167969 14.230469 L 0.99804688 14.5 L 0.81445312 14.794922 L 0.6640625 15.109375 L 0.46484375 15.652344 L 0.296875 16.208984 L 0.16796875 16.775391 L 0.07421875 17.345703 L 0.01953125 17.923828 L 0 18.503906 L 0.01953125 18.644531 L 0.080078125 18.775391 L 0.171875 18.882812 L 0.29296875 18.958984 L 0.42773438 19 L 0.57226562 19 L 0.70703125 18.958984 L 0.828125 18.882812 L 0.91992188 18.775391 L 0.98046875 18.644531 L 1 18.503906 L 1.0175781 17.988281 L 1.0664062 17.476562 L 1.1484375 16.964844 L 1.2636719 16.464844 L 1.4121094 15.96875 L 1.5898438 15.486328 L 1.7089844 15.242188 L 1.859375 15.017578 L 2.0390625 14.816406 L 2.2441406 14.640625 L 2.4707031 14.492188 L 2.7148438 14.378906 L 3.4960938 14.089844 L 4.2871094 13.835938 L 5.0878906 13.615234 L 5.9003906 13.427734 L 6.7167969 13.273438 L 6.9472656 13.216797 L 7.1699219 13.123047 L 7.3710938 12.996094 L 7.5507812 12.835938 L 7.7011719 12.652344 L 7.8222656 12.443359 L 7.9101562 12.220703 L 7.9570312 11.986328 L 7.9707031 11.748047 L 7.9433594 11.509766 L 7.8789062 11.279297 L 7.7792969 11.0625 L 7.6484375 10.865234 L 7.4902344 10.644531 L 7.3535156 10.416016 L 7.0742188 9.8554688 L 6.8261719 9.2792969 L 6.609375 8.6933594 L 6.4238281 8.09375 L 6.2734375 7.4863281 L 6.1542969 6.8710938 L 6.0683594 6.2519531 L 6.015625 5.6289062 L 6 5.0019531 L 6.0195312 4.609375 L 6.078125 4.2207031 L 6.171875 3.8398438 L 6.3046875 3.4707031 L 6.4726562 3.1152344 L 6.6738281 2.7792969 L 6.9082031 2.4628906 L 7.1699219 2.171875 L 7.4628906 1.9082031 L 7.7773438 1.6738281 L 8.1152344 1.4746094 L 8.4707031 1.3046875 L 8.8398438 1.1738281 L 9.21875 1.078125 L 9.6074219 1.0195312 L 10 1 L 10.392578 1.0195312 L 10.78125 1.078125 L 11.160156 1.1738281 L 11.529297 1.3046875 L 11.886719 1.4746094 L 12.222656 1.6738281 L 12.537109 1.9082031 L 12.830078 2.171875 L 13.091797 2.4628906 L 13.326172 2.7792969 L 13.527344 3.1152344 L 13.695312 3.4707031 L 13.828125 3.8398438 L 13.923828 4.2207031 L 13.982422 4.609375 L 14 5.0019531 L 13.984375 5.6289062 L 13.931641 6.2519531 L 13.845703 6.8710938 L 13.728516 7.4863281 L 13.576172 8.09375 L 13.390625 8.6933594 L 13.173828 9.2792969 L 12.925781 9.8554688 L 12.646484 10.416016 L 12.509766 10.644531 L 12.351562 10.865234 L 12.220703 11.0625 L 12.121094 11.279297 L 12.056641 11.509766 L 12.029297 11.748047 L 12.042969 11.986328 L 12.091797 12.220703 L 12.177734 12.443359 L 12.298828 12.652344 L 12.451172 12.835938 L 12.628906 12.996094 L 12.830078 13.123047 L 13.052734 13.216797 L 13.283203 13.273438 L 14.099609 13.427734 L 14.912109 13.615234 L 15.712891 13.835938 L 16.505859 14.089844 L 17.285156 14.378906 L 17.529297 14.492188 L 17.755859 14.640625 L 17.960938 14.816406 L 18.140625 15.017578 L 18.291016 15.242188 L 18.410156 15.486328 L 18.587891 15.96875 L 18.736328 16.464844 L 18.851562 16.964844 L 18.933594 17.476562 L 18.982422 17.988281 L 19 18.503906 L 19.019531 18.644531 L 19.080078 18.775391 L 19.171875 18.882812 L 19.292969 18.958984 L 19.427734 19 L 19.572266 19 L 19.708984 18.958984 L 19.828125 18.882812 L 19.919922 18.775391 L 19.980469 18.644531 L 20 18.503906 L 19.980469 17.923828 L 19.925781 17.345703 L 19.832031 16.773438 L 19.703125 16.208984 L 19.535156 15.652344 L 19.335938 15.109375 L 19.185547 14.794922 L 19.001953 14.5 L 18.783203 14.230469 L 18.535156 13.986328 L 18.263672 13.771484 L 17.966797 13.591797 L 17.648438 13.445312 L 16.830078 13.146484 L 15.998047 12.878906 L 15.15625 12.646484 L 14.306641 12.449219 L 13.447266 12.287109 L 13.322266 12.25 L 13.212891 12.181641 L 13.125 12.087891 L 13.0625 11.974609 L 13.033203 11.847656 L 13.035156 11.720703 L 13.070312 11.595703 L 13.136719 11.484375 L 13.347656 11.193359 L 13.529297 10.884766 L 13.833984 10.275391 L 14.103516 9.6523438 L 14.339844 9.0136719 L 14.541016 8.3613281 L 14.705078 7.703125 L 14.833984 7.0351562 L 14.925781 6.359375 L 14.982422 5.6816406 L 15 5.0019531 L 14.982422 4.5664062 L 14.923828 4.1328125 L 14.830078 3.7070312 L 14.697266 3.2910156 L 14.53125 2.8886719 L 14.330078 2.5 L 14.097656 2.1328125 L 13.830078 1.7871094 L 13.537109 1.4648438 L 13.212891 1.171875 L 12.869141 0.90625 L 12.5 0.66992188 L 12.113281 0.46875 L 11.710938 0.30273438 L 11.294922 0.16992188 L 10.867188 0.076171875 L 10.435547 0.01953125 L 10 0 z "
                fill="currentColor"
                fillOpacity="1"
                stroke="none"
                strokeWidth="0"
            />
        </g>
    </svg>
);

export const ThemeIcon = ({ width = '3rem', height = '3rem', className }) => (
    <svg
        className={cx('icon', { [className]: className })}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M2.02911 12.42C2.38911 17.57 6.75911 21.76 11.9891 21.99C15.6791 22.15 18.9791 20.43 20.9591 17.72C21.7791 16.61 21.3391 15.87 19.9691 16.12C19.2991 16.24 18.6091 16.29 17.8891 16.26C12.9991 16.06 8.99911 11.97 8.97911 7.13996C8.96911 5.83996 9.23911 4.60996 9.72911 3.48996C10.2691 2.24996 9.61911 1.65996 8.36911 2.18996C4.40911 3.85996 1.69911 7.84996 2.02911 12.42Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const LogOutIcon = ({ width = '3rem', height = '3rem', className }) => (
    <svg
        className={cx('icon', { [className]: className })}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        fill="transparent"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
        <polyline points="16 17 21 12 16 7"></polyline>
        <line x1="21" y1="12" x2="9" y2="12"></line>
    </svg>
);

export const WishlistIcon = ({ width = '3rem', height = '3rem', className }) => (
    <svg
        className={cx('icon', { [className]: className })}
        fill="currentColor"
        width={width}
        height={height}
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g data-name="24 wishlist" id="_24_wishlist">
            <path d="M27.11,17.74a1,1,0,0,1-1,1H16.79a1,1,0,0,1,0-2h9.32A1,1,0,0,1,27.11,17.74Z" />

            <path d="M39.79,16.65,35.71,20a1.025,1.025,0,0,1-.64.23.948.948,0,0,1-.65-.25l-2.78-2.42a1,1,0,0,1-.1-1.41,1.011,1.011,0,0,1,1.42-.1l2.13,1.87,3.44-2.82a.989.989,0,0,1,1.4.14A1,1,0,0,1,39.79,16.65Z" />

            <path d="M27.11,27.06a1,1,0,0,1-1,1H16.79a1,1,0,0,1,0-2h9.32A1,1,0,0,1,27.11,27.06Z" />

            <path d="M39.79,25.97l-4.08,3.35a.97.97,0,0,1-.64.23.948.948,0,0,1-.65-.25l-2.78-2.42a1,1,0,0,1-.1-1.41,1.011,1.011,0,0,1,1.42-.1l2.13,1.87,3.44-2.82a.989.989,0,0,1,1.4.14A1,1,0,0,1,39.79,25.97Z" />

            <path d="M27.11,36.38a1,1,0,0,1-1,1H16.79a1,1,0,0,1,0-2h9.32A1,1,0,0,1,27.11,36.38Z" />

            <path d="M39.79,35.29l-4.08,3.36a1.015,1.015,0,0,1-.64.22.987.987,0,0,1-.65-.24L31.64,36.2a1,1,0,0,1-.1-1.41,1.01,1.01,0,0,1,1.42-.09l2.13,1.86,3.44-2.82a1,1,0,0,1,1.26,1.55Z" />

            <path d="M27.11,45.7a1,1,0,0,1-1,1H16.79a1,1,0,0,1,0-2h9.32A1,1,0,0,1,27.11,45.7Z" />

            <path d="M45.75,38.46V9.93A3.718,3.718,0,0,0,41.96,6.3H35.5V5.5a2.006,2.006,0,0,0-2-2H22.45a2.006,2.006,0,0,0-2,2v.8H13.99a3.727,3.727,0,0,0-3.8,3.63V52.2a3.728,3.728,0,0,0,3.8,3.64H33.45a11.248,11.248,0,1,0,12.3-17.38ZM22.45,5.5H33.5V9.09H22.45ZM13.99,53.84a1.752,1.752,0,0,1-1.8-1.64V9.93a1.751,1.751,0,0,1,1.8-1.63h6.46v.79a2,2,0,0,0,2,2H33.5a2,2,0,0,0,2-2V8.3h6.46a1.741,1.741,0,0,1,1.79,1.63V38.06a11.726,11.726,0,0,0-1.2-.07A11.238,11.238,0,0,0,32.29,53.84ZM42.55,58.5a9.255,9.255,0,1,1,9.26-9.25A9.261,9.261,0,0,1,42.55,58.5Z" />

            <path d="M49.52,46.61c-.01-.11-.03-.21-.05-.32a3.519,3.519,0,0,0-3.48-2.94h-.02a5,5,0,0,0-3.42,1.46,4.963,4.963,0,0,0-3.42-1.46h-.01a3.326,3.326,0,0,0-.96.15.749.749,0,0,0-.16.04,3.5,3.5,0,0,0-2.01,1.73c-.01.03-.02.05-.03.08a3.682,3.682,0,0,0-.33.95c-.02.1-.03.2-.05.31-.65,4.9,4.37,8.58,5.89,9.57l.51.35a.931.931,0,0,0,.57.19.959.959,0,0,0,.58-.19l.47-.33C45.15,55.19,50.17,51.51,49.52,46.61ZM42.55,54.5c-2.67-1.76-5.38-4.67-4.98-7.63l.03-.21a1.526,1.526,0,0,1,1.52-1.31,3.026,3.026,0,0,1,2.54,1.58,1.039,1.039,0,0,0,1.78,0,3.039,3.039,0,0,1,2.54-1.58,1.518,1.518,0,0,1,1.52,1.3l.04.22C47.93,49.82,45.25,52.72,42.55,54.5Z" />
        </g>
    </svg>
);

export const LanguageIcon = ({ width = '3rem', height = '3rem', className }) => (
    <svg
        className={cx('icon', { [className]: className })}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="languageIconTitle"
        stroke="currentColor"
        fill="transparent"
        strokeWidth="1"
        strokeLinecap="square"
        strokeLinejoin="miter"
    >
        {' '}
        <title id="languageIconTitle">Language</title> <circle cx="12" cy="12" r="10" />{' '}
        <path
            strokeLinecap="round"
            d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z"
        />{' '}
        <path strokeLinecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15" />{' '}
    </svg>
);

export const SettingIcon = ({ width = '3rem', height = '3rem', className }) => (
    <svg
        className={cx('icon', { [className]: className })}
        width={width}
        height={height}
        fill="transparent"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M10.4 5.6C10.4 4.84575 10.4 4.46863 10.6343 4.23431C10.8686 4 11.2458 4 12 4C12.7542 4 13.1314 4 13.3657 4.23431C13.6 4.46863 13.6 4.84575 13.6 5.6V6.6319C13.9725 6.74275 14.3287 6.8913 14.6642 7.07314L15.3942 6.34315C15.9275 5.80982 16.1942 5.54315 16.5256 5.54315C16.8569 5.54315 17.1236 5.80982 17.6569 6.34315C18.1903 6.87649 18.4569 7.14315 18.4569 7.47452C18.4569 7.80589 18.1903 8.07256 17.6569 8.60589L16.9269 9.33591C17.1087 9.67142 17.2573 10.0276 17.3681 10.4H18.4C19.1542 10.4 19.5314 10.4 19.7657 10.6343C20 10.8686 20 11.2458 20 12C20 12.7542 20 13.1314 19.7657 13.3657C19.5314 13.6 19.1542 13.6 18.4 13.6H17.3681C17.2573 13.9724 17.1087 14.3286 16.9269 14.6641L17.6569 15.3941C18.1902 15.9275 18.4569 16.1941 18.4569 16.5255C18.4569 16.8569 18.1902 17.1235 17.6569 17.6569C17.1236 18.1902 16.8569 18.4569 16.5255 18.4569C16.1942 18.4569 15.9275 18.1902 15.3942 17.6569L14.6642 16.9269C14.3286 17.1087 13.9724 17.2573 13.6 17.3681V18.4C13.6 19.1542 13.6 19.5314 13.3657 19.7657C13.1314 20 12.7542 20 12 20C11.2458 20 10.8686 20 10.6343 19.7657C10.4 19.5314 10.4 19.1542 10.4 18.4V17.3681C10.0276 17.2573 9.67142 17.1087 9.33591 16.9269L8.60598 17.6569C8.07265 18.1902 7.80598 18.4569 7.47461 18.4569C7.14324 18.4569 6.87657 18.1902 6.34324 17.6569C5.80991 17.1235 5.54324 16.8569 5.54324 16.5255C5.54324 16.1941 5.80991 15.9275 6.34324 15.3941L7.07314 14.6642C6.8913 14.3287 6.74275 13.9725 6.6319 13.6H5.6C4.84575 13.6 4.46863 13.6 4.23431 13.3657C4 13.1314 4 12.7542 4 12C4 11.2458 4 10.8686 4.23431 10.6343C4.46863 10.4 4.84575 10.4 5.6 10.4H6.6319C6.74275 10.0276 6.8913 9.67135 7.07312 9.33581L6.3432 8.60589C5.80987 8.07256 5.5432 7.80589 5.5432 7.47452C5.5432 7.14315 5.80987 6.87648 6.3432 6.34315C6.87654 5.80982 7.1432 5.54315 7.47457 5.54315C7.80594 5.54315 8.07261 5.80982 8.60594 6.34315L9.33588 7.07308C9.6714 6.89128 10.0276 6.74274 10.4 6.6319V5.6Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M14.4 12C14.4 13.3255 13.3255 14.4 12 14.4C10.6745 14.4 9.6 13.3255 9.6 12C9.6 10.6745 10.6745 9.6 12 9.6C13.3255 9.6 14.4 10.6745 14.4 12Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const NoNotifiIcon = ({ width = '3rem', height = '3rem', className }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="transparent"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_15_166)">
            <rect width="24" height="24" fill="transparent" />
            <path
                d="M6 15C6 15 6 13 6 11C6 9 7 5 12 5C13.5723 5 14.749 5.39552 15.6235 6M9.5 19C9.5 21 10.5 22 12 22C13.5 22 14.5 21 14.5 19M9.5 19C11.0621 19 14.5 19 14.5 19M9.5 19C9.14909 19 8.36719 19 7.5 19M14.5 19H18.382C19.1253 19 19.6088 18.2177 19.2764 17.5528L18 15C18 15 18 13 18 11C18 10.3755 17.9025 9.55594 17.6161 8.72408"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M12 5V3" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 3L3 21" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_15_166">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

export const CloseIcon = ({ width = '3rem', height = '3rem', className, onClick }) => (
    <svg
        width={width}
        height={height}
        className={cx('icon', { [className]: className })}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
    >
        <rect width="24" height="24" fill="transparent" />
        <path
            d="M7 17L16.8995 7.10051"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M7 7.00001L16.8995 16.8995"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const LoadingIcon = ({ width = '3rem', height = '3rem', className }) => (
    <svg
        width={width}
        height={height}
        className={cx('icon', { [className]: className })}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M11,16 C12.1045695,16 13,16.8954305 13,18 C13,19.1045695 12.1045695,20 11,20 C9.8954305,20 9,19.1045695 9,18 C9,16.8954305 9.8954305,16 11,16 Z M4.74123945,13 C6.12195133,13 7.24123945,14.1192881 7.24123945,15.5 C7.24123945,16.8807119 6.12195133,18 4.74123945,18 C3.36052758,18 2.24123945,16.8807119 2.24123945,15.5 C2.24123945,14.1192881 3.36052758,13 4.74123945,13 Z M16.3193286,13.5 C17.4238981,13.5 18.3193286,14.3954305 18.3193286,15.5 C18.3193286,16.6045695 17.4238981,17.5 16.3193286,17.5 C15.2147591,17.5 14.3193286,16.6045695 14.3193286,15.5 C14.3193286,14.3954305 15.2147591,13.5 16.3193286,13.5 Z M18.5,9.31854099 C19.3284271,9.31854099 20,9.99011387 20,10.818541 C20,11.6469681 19.3284271,12.318541 18.5,12.318541 C17.6715729,12.318541 17,11.6469681 17,10.818541 C17,9.99011387 17.6715729,9.31854099 18.5,9.31854099 Z M2.5,6 C3.88071187,6 5,7.11928813 5,8.5 C5,9.88071187 3.88071187,11 2.5,11 C1.11928813,11 0,9.88071187 0,8.5 C0,7.11928813 1.11928813,6 2.5,6 Z M17.7857894,5.20724734 C18.3380741,5.20724734 18.7857894,5.65496259 18.7857894,6.20724734 C18.7857894,6.75953209 18.3380741,7.20724734 17.7857894,7.20724734 C17.2335046,7.20724734 16.7857894,6.75953209 16.7857894,6.20724734 C16.7857894,5.65496259 17.2335046,5.20724734 17.7857894,5.20724734 Z M8,0 C9.65685425,0 11,1.34314575 11,3 C11,4.65685425 9.65685425,6 8,6 C6.34314575,6 5,4.65685425 5,3 C5,1.34314575 6.34314575,0 8,0 Z M15.5,3 C15.7761424,3 16,3.22385763 16,3.5 C16,3.77614237 15.7761424,4 15.5,4 C15.2238576,4 15,3.77614237 15,3.5 C15,3.22385763 15.2238576,3 15.5,3 Z"
        />
    </svg>
);

export const ArrowDownIcon = ({ width = '3rem', height = '3rem', className }) => (
    <svg
        fill="currentColor"
        width={width}
        height={height}
        className={cx('icon', { [className]: className })}
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M0.256 8.606c0-0.269 0.106-0.544 0.313-0.75 0.412-0.412 1.087-0.412 1.5 0l14.119 14.119 13.913-13.912c0.413-0.412 1.087-0.412 1.5 0s0.413 1.088 0 1.5l-14.663 14.669c-0.413 0.413-1.088 0.413-1.5 0l-14.869-14.869c-0.213-0.213-0.313-0.481-0.313-0.756z"></path>
    </svg>
);

export const ArrowUpIcon = ({ width = '3rem', height = '3rem', className }) => (
    <svg
        width={width}
        height={height}
        className={cx('icon', { [className]: className })}
        viewBox="0 -4.5 20 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g
                id="Dribbble-Light-Preview"
                transform="translate(-140.000000, -6683.000000)"
                fill="currentColor"
            >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                        d="M84,6532.61035 L85.4053672,6534 L94.0131154,6525.73862 L94.9311945,6526.61986 L94.9261501,6526.61502 L102.573446,6533.95545 L104,6532.58614 C101.8864,6530.55736 95.9854722,6524.89321 94.0131154,6523 C92.5472155,6524.40611 93.9757869,6523.03486 84,6532.61035"
                        id="arrow_up-[#340]"
                    ></path>
                </g>
            </g>
        </g>
    </svg>
);

export const ArrowLeftIcon = ({ width = '3rem', height = '3rem', className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={cx('icon', { [className]: className })}
        viewBox="0 0 40 40"
    >
        <g fill="currentColor" fillRule="evenodd" opacity=".652">
            <g fill="currentColor">
                <g>
                    <path
                        d="M23.821 8.821c.651-.65 1.707-.65 2.358 0 .6.601.647 1.547.138 2.2l-.138.158L17.359 20l8.82 8.821c.6.601.647 1.547.138 2.2l-.138.158c-.601.6-1.547.647-2.2.138l-.158-.138-10-10c-.6-.601-.647-1.547-.138-2.2l.138-.158 10-10z"
                        transform="translate(-24.000000, -440.000000) translate(24.000000, 440.000000)"
                    ></path>
                </g>
            </g>
        </g>
    </svg>
);

export const ArrowRightIcon = ({ width = '3rem', height = '3rem', className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={cx('icon', { [className]: className })}
        viewBox="0 0 40 40"
    >
        <g fill="currentColor" fillRule="evenodd">
            <g fill="currentColor">
                <g>
                    <path
                        d="M23.821 8.821c.651-.65 1.707-.65 2.358 0 .6.601.647 1.547.138 2.2l-.138.158L17.359 20l8.82 8.821c.6.601.647 1.547.138 2.2l-.138.158c-.601.6-1.547.647-2.2.138l-.158-.138-10-10c-.6-.601-.647-1.547-.138-2.2l.138-.158 10-10z"
                        transform="translate(-1376.000000, -440.000000) translate(1376.000000, 440.000000) translate(20.000000, 20.000000) scale(-1, 1) translate(-20.000000, -20.000000)"
                    ></path>
                </g>
            </g>
        </g>
    </svg>
);

export const ArrowLeftFadeIcon = ({ width = '3rem', height = '3rem', className }) => (
    <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={cx('icon', { [className]: className })}
        viewBox="0 0 36 36"
    >
        <path
            d="M18 1.875c8.906 0 16.125 7.22 16.125 16.125 0 8.906-7.22 16.125-16.125 16.125-8.906 0-16.125-7.22-16.125-16.125C1.875 9.094 9.095 1.875 18 1.875zm0 2.25C10.337 4.125 4.125 10.337 4.125 18S10.337 31.875 18 31.875 31.875 25.663 31.875 18 25.663 4.125 18 4.125zM10.875 18v-.036l.006-.078-.006.114c0-.06.005-.12.014-.177l.01-.051c.024-.118.066-.23.124-.33l.026-.044.043-.063.004-.004.01-.015a1.3 1.3 0 01.083-.096l.016-.015 6-6a1.125 1.125 0 011.7 1.464l-.11.126-4.079 4.08H24a1.125 1.125 0 01.153 2.24l-.153.01h-9.284l4.08 4.08c.399.399.435 1.024.108 1.464l-.109.126c-.399.4-1.024.436-1.464.11l-.126-.11-6-6-.018-.018a.725.725 0 01-.045-.05l.063.068a1.155 1.155 0 01-.104-.118l-.026-.036a.943.943 0 01-.04-.062l-.033-.06-.02-.04a.538.538 0 01-.024-.055.983.983 0 01-.07-.252l-.005-.04a.62.62 0 01-.006-.062l-.002-.052V18z"
            fillRule="evenodd"
        ></path>
    </svg>
);

export const ArrowRightFadeIcon = ({ width = '3rem', height = '3rem', className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width={width}
        height={height}
        className={cx('icon', { [className]: className })}
        viewBox="0 0 36 36"
    >
        <path
            d="M18 1.875c8.906 0 16.125 7.22 16.125 16.125 0 8.906-7.22 16.125-16.125 16.125-8.906 0-16.125-7.22-16.125-16.125C1.875 9.094 9.095 1.875 18 1.875zm0 2.25C10.337 4.125 4.125 10.337 4.125 18S10.337 31.875 18 31.875 31.875 25.663 31.875 18 25.663 4.125 18 4.125zm.67 6.97l.125.11 6 6 .018.018c.016.016.03.032.045.05l-.063-.068c.038.037.072.077.104.118l.026.036c.014.02.027.04.04.062l.033.06.02.04a.538.538 0 01.024.055 1.185 1.185 0 01.07.252l.005.04c.005.043.008.087.008.132l-.002.065c0 .016-.002.032-.004.048l.006-.113c0 .06-.005.12-.014.177l-.01.051a1.034 1.034 0 01-.15.374c-.014.021-.027.041-.042.06l-.005.007-.01.015a1.3 1.3 0 01-.083.096l-.016.015-6 6a1.125 1.125 0 01-1.7-1.464l.11-.126 4.078-4.08H12a1.125 1.125 0 01-.153-2.24l.153-.01h9.283l-4.078-4.08a1.125 1.125 0 01-.11-1.464l.11-.126a1.125 1.125 0 011.464-.11z"
            fillRule="evenodd"
        ></path>
    </svg>
);

export const TrailerIcon = ({ width = '3rem', height = '3rem', className }) => (
    <svg
        width={width}
        height={height}
        className={cx('icon', { [className]: className })}
        id="icon-trailer"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M21 2c1.103 0 2 .896 2 2v16c0 1.103-.897 2-2 2H3c-1.103 0-2-.897-2-2V4c0-1.104.897-2 2-2zm.5 1.5h-19v17h19.001l-.001-17zM7 17v2H5v-2h2zm4 0v2H9v-2h2zm4 0v2h-2v-2h2zm4 0v2h-2v-2h2zm-9-8l6 3-6 3V9zM7 5v2H5V5h2zm4 0v2H9V5h2zm4 0v2h-2V5h2zm4 0v2h-2V5h2z"
            fill="currentColor"
            fillRule="evenodd"
        ></path>
    </svg>
);

export const PlusIcon = ({ width = '3rem', height = '3rem', className }) => (
    <svg
        viewBox="0 0 448 448"
        id="add-list-icon"
        width={width}
        height={height}
        className={cx('icon', { [className]: className })}
    >
        <path
            fill="currentColor"
            d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"
        ></path>
    </svg>
);

export const PlayIcon = ({ width = '3rem', height = '3rem', className }) => (
    <svg
        version="1.1"
        viewBox="0 0 41.999 41.999"
        id="icon-play"
        width={width}
        height={height}
        className={cx('icon', { [className]: className })}
    >
        <path
            fill="currentColor"
            d="M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40 c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20 c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z"
        ></path>
    </svg>
);

export const PlayIconBorder = ({ width = '3rem', height = '3rem', className }) => (
    <svg
        width={width}
        height={height}
        className={cx('icon', { [className]: className })}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M5 3v18a1 1 0 0 0 1.54.841l14-9a1 1 0 0 0 0-1.682l-14-9A1 1 0 0 0 5 3zm2 1.832L18.15 12 7 19.167V4.832z"
            fill="#FFF"
            fillRule="evenodd"
        ></path>
    </svg>
);

export const AddListIcon = ({ width = '3rem', height = '3rem', className }) => (
    <svg
        width={width}
        height={height}
        className={cx('icon', { [className]: className })}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <g clipPath="url(#bookmark_icon)">
            <path
                d="M18.5 19.2a.24.24 0 0 1-.42.17l-4.31-4.3a2.5 2.5 0 0 0-3.53 0l-4.31 4.3a.25.25 0 0 1-.43-.17V3.99a.5.5 0 0 1 .49-.5h12a.5.5 0 0 1 .5.5l.01 15.21Zm.49-17.21h-14a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1 1 1 0 0 0 .7-.3l5.59-5.58a1 1 0 0 1 1.41 0l5.59 5.58a1 1 0 0 0 .7.3 1 1 0 0 0 1-1v-18a1 1 0 0 0-1-1h.01Z"
                fill="#fff"
            ></path>
        </g>
        <defs>
            <clipPath id="bookmark_icon">
                <path fill="#fff" transform="translate(4 1.99)" d="M0 0h16v20.02H0z"></path>
            </clipPath>
        </defs>
    </svg>
);

export const TickIcon = ({ width = '3rem', height = '3rem', className }) => (
    <svg
        width={width}
        height={height}
        className={cx('icon', { [className]: className })}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill='currentColor'
    >
        <path d="m.828 13.336c-.261.304-.388.691-.357 1.091s.215.764.52 1.024l7.403 6.346c.275.235.616.361.974.361.044 0 .089-.002.134-.006.405-.036.77-.229 1.028-.542l12.662-15.411c.254-.31.373-.7.334-1.099-.04-.399-.231-.759-.541-1.014l-2.318-1.904c-.639-.524-1.585-.432-2.111.207l-9.745 11.861-3.916-3.355c-.628-.536-1.576-.465-2.115.163z"></path>
    </svg>
);

