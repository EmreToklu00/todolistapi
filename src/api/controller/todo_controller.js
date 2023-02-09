const Todo = require("../../model/todo_model")

const todoAdd = async (req, res) => {
    try {
        const todoAdd = new Todo(req.body)
        await todoAdd.save()
            .then(() => {
                return res.status(201).json(todoAdd)
            })
            .catch((err) => {
                return res.status(400).json({
                    success: false,
                    message: "Kayıt Oluşturulurken Hata Çıktı : " + err
                })
            })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.toString()
        })
    }
}
const todoGetAll = async (req, res) => {
    const { page } = req.query
    const limit = 10
    const skip = Number(page - 1) * limit
    try {
        const todoGetAll = await Todo.find({}).limit(limit).skip(skip);
        return res.status(200).json({
            data: todoGetAll
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.toString()
        })
    }
}

const todoUpdate = async (req, res) => {
    const { id } = req.params
    try {
        const todoUpdate = await Todo.findByIdAndUpdate(id, req.body)

        if (todoUpdate) {
            return res.status(200).json({
                success: true,
                message: "Güncelleme Başarılı"
            })
        }
        else return res.status(400).json({
            success: false,
            message: "Kayıt Güncellenemedi !"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.toString()
        })
    }
}

const todoDelete = async (req, res) => {
    const { id } = req.params

    try {
        const todoDelete = await Todo.findByIdAndDelete(id)
        if (todoDelete) {
            return res.status(200).json({
                success: true,
                message: "Kayıt Başarıyla Silindi"
            })
        }
        else {
            return res.status(400).json({
                success: false,
                message: "Kayıt Silinemedi"
            })
        }

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Kayıt Silinemedi : " + error
        })
    }


}

const todoGet = async (req, res) => {
    const { id } = req.params

    const todoGet = await Todo.findById(id)
    if (todoGet) {
        return res.status(200).json(todoGet)
    }
    else {
        return res.status(404).json({
            success: false,
            message: "Kayıt Bulunamadı !"
        })
    }
}



module.exports = { todoAdd, todoGetAll, todoUpdate, todoGet, todoDelete }