// src/components/ErrorMessage.jsx

function ErrorMessage({ message }) {
    return (
        <div className="mt-6 bg-red-200 text-red-800 p-4 rounded-md w-80 text-center">
            {message}
        </div>
    );
}

export default ErrorMessage;
