import React from "react";

const Ctx = React.createContext(null);

const ToastContainer = props => (
  <div style={{ position: "fixed", right: 0, top: 0 }} {...props} />
);
const Toast = ({ children, onDismiss }) => (
  <div
    style={{
      background: "LemonChiffon",
      cursor: "pointer",
      fontSize: 14,
      margin: 10,
      padding: 10
    }}
    onClick={onDismiss}
  >
    {children}
  </div>
);

let toastCount = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const createToast = content => {
    const id = toastCount++;
    const toast = { content, id };
    setToasts([...toasts, toast]);

    setTimeout(() => {
      removeToast(id)
    }, 2000)
  }

  const removeToast = id => {
    const newToasts = toasts.filter(t => t.id !== id)
    setToasts(newToasts)
  }

  // avoid creating a new fn on every render
  const onDismiss = id => () => removeToast(id)

  return (
    <Ctx.Provider value={{ createToast, removeToast }}>
      {children}
      <ToastContainer>
        {toasts.map(({ content, id, ...rest }) => (
          <Toast key={id} Toast={Toast} onDismiss={onDismiss(id)} {...rest}>
            {content}
          </Toast>
        ))}
      </ToastContainer>
    </Ctx.Provider>
  );
}

export const useToast = () => React.useContext(Ctx);
