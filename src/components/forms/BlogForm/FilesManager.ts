interface InputChangedI {
    inputValue: FileList | null,
    setFiles: React.Dispatch<React.SetStateAction<Array<File> | null>>
}

interface removeAttachedFileI {
    fileName: string,
    inputValue: File[] | null,
    setFiles: React.Dispatch<React.SetStateAction<Array<File> | null>>
}

export default class FilesManager {
    static inputChanged (args: InputChangedI) {
        if(args.inputValue && args.inputValue.length > 0) {
            const filesArr = Array.from(args.inputValue);
            const firstFiveFiles = filesArr.slice(0,5);
            return args.setFiles(firstFiveFiles);
        }
        return args.setFiles(null);
    }

    static removeAttachedFile (args: removeAttachedFileI) {
        if(args.inputValue) {
            const filesArr = Array.from(args.inputValue);

            const removedFileArr = filesArr.filter(file => file.name !== args.fileName);
            
            setTimeout(() => {
                // timeout for animation
                if(removedFileArr.length === 0) {
                    return args.setFiles(null);
                }
                args.setFiles(removedFileArr);
            }, 500);
        }
    }
}