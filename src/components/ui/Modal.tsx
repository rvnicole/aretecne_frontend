type ModalProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
  
export default function Modal({ open, onClose, children }: ModalProps) {
    if (!open) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur"
          onClick={onClose}
        />

        <div className="relative bg-white rounded-xl p-6 w-full max-w-md shadow-xl animate-fadeIn mx-2">
          {children}
  
            <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                onClick={onClose}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
      </div>
    );
  }
  