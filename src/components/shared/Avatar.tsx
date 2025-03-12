
interface AvatarProps {
    className?: string;  // Clase CSS para personalizar el avatar. Optional prop to add a custom className to the avatar. Example: className="flex-shrink-0 w-10 h-10"  // Clase CSS para personalizar el avatar. Optional prop to add a custom className to the avatar. Example: className="flex-shrink-0 w-10 h-10"  // Imagen del avatar. Optional prop to add a custom image for
    titleClass?: string; // Clase CSS para personalizar el avatar. Optional prop
    subTitleClass?: string; // Clase CSS para personalizar el avatar. Optional prop to add a custom className to the avatar. Example: className="flex-shrink-0 w-10 h-10"  // Imagen del avatar. Optional prop to add a custom image for the avatar. Example: img="https://images.unsplash.com/photo-1600486913747-55e5470d
    img?: string;
    title?: string;
    subTitle?: string;
    action?: () => void; // Acción al hacer click en el avatar, por ejemplo, para mostrar opciones de menú. Optional prop to add an action when the avatar is clicked. Example: action={() => openMenu()}  // Acción al hacer click en el avatar, por ejemplo, para mostrar opciones de menú. Optional prop to add an action when the avatar is clicked. Example: action={() => openMenu()}  // Acción al hacer click en el avatar
}

export const Avatar = ({ img, title, subTitle, action, className, titleClass, subTitleClass }: AvatarProps) => {

    return (
        <div
            className={`flex items-center gap-2 p-2 ${className}`}
            onClick={action}
        >
            {
                img &&
                <img
                    alt="Foto de perfil"
                    src={img ?? "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}
                    className="size-10 rounded-full object-cover"
                />
            }
            {
                (title || subTitle) &&
                <div>
                    <p className={`text-xs`}>
                        <strong className={`text-nowrap block font-medium ${titleClass}`}>{title}</strong>
                        <span className={`text-nowrap ${subTitleClass}`}>{subTitle}</span>
                    </p>
                </div>
            }
        </div>
    );
};
