import { getToasts } from "../helpers/getToasts"
import { getDrinks } from "../helpers/getDrinks"
import { Toast } from "./Toast"

export const Menu = () => {
    const toasts = getToasts

    return (
        <>

            <h2 className="text-center">Tostadas</h2>
            <div className="grid toasts">
                {
                    toasts.map((toasts) => (
                        <Toast key={toasts.id} {...toasts} />
                    ))
                }

            </div>
            <hr />
            <h2 className="text-center">Bebidas</h2>
            <div className="grid drinks">
                {
                    toasts.map((toasts) => (
                        <Toast key={toasts.id} {...toasts} />
                    ))
                }

            </div>
        </>

    )
}
