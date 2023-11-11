import '@/assets/scss/themes.scss'

// redux
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "@/slices";
const store = configureStore({ reducer: rootReducer, devTools: true });

export default function App({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page)

    return (
        <Provider store={store}>
            {
                getLayout(<Component {...pageProps} />)
            }
        </Provider>
    )

}
