import { routes } from '../config';

import Home from '../pages/Home';
import Release from '../pages/Release';
import Odd from '../pages/Odd';
import Series from '../pages/Series';
import Wishlist from '../pages/Wishlist';
import Login from '../pages/Login';
import Donate from '../pages/Donate';
import Detail from '../pages/Detail';

export const publicRoutes = [
    { path: routes.home, component: Home, linkName: 'Trang chủ' },
    { path: routes.release, component: Release, linkName: 'Phim chiếu rạp' },
    { path: routes.odd, component: Odd, linkName: 'Phim lẻ' },
    { path: routes.series, component: Series, linkName: 'Phim bộ' },
    { path: routes.wishlist, component: Wishlist, linkName: 'Danh sách yêu thích' },
    { path: routes.donate, component: Donate, linkName: 'Donate me' },
    { path: routes.detail, component: Detail },
    { path: routes.login, component: Login, layout: null },
    { path: routes.other, component: Home },
];
