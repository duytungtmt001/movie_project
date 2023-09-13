import { routes, loaders } from '../config';

import Home from '../pages/Home';
import Release from '../pages/Release';
import Odd from '../pages/Odd';
import Series from '../pages/Series';
import Wishlist from '../pages/Wishlist';
import Login from '../pages/Login';
import Donate from '../pages/Donate';
import Detail from '../pages/Detail';
import Ribbon from '../pages/Ribbon';

export const publicRoutes = [
    { path: routes.home, component: Home, linkName: 'Trang chủ', loader: loaders.home },
    {
        path: routes.release,
        component: Release,
        linkName: 'Phim chiếu rạp',
        loader: loaders.release,
    },
    { path: routes.odd, component: Odd, linkName: 'Phim lẻ', loader: loaders.odd },
    { path: routes.series, component: Series, linkName: 'Phim bộ', loader: loaders.series },
    { path: routes.wishlist, component: Wishlist, linkName: 'Danh sách yêu thích' },
    { path: routes.donate, component: Donate, linkName: 'Donate me' },
    { path: routes.detail, component: Detail, loader: loaders.detail },
    { path: routes.ribbon, component: Ribbon, loader: loaders.ribbon },
    { path: routes.login, component: Login, layout: null, loader: loaders.login },
    { path: routes.other, component: Home },
];
