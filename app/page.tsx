import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardTitle, CardContent, CardHeader  } from '@/components/ui/card'
import { Badge } from "@/components/ui/badge"
import { Separator } from '@/components/ui/separator'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, List, Check, Pencil, ArrowDownRight, Trash, ListCheck, Sigma } from 'lucide-react';

const Home = () => {
  return (
    <main className='bg-gray-100 w-full h-screen flex justify-center items-center'> {/*pai de todos*/}
      <Card className='w-lg '> {/*inicio do card*/}
        <CardTitle className=' flex justify-center'>Gerenciador de tarefas</CardTitle> {/*titul9o do card*/}

  {/*header*/}
        <CardHeader className='flex'>
            <Input placeholder='Adicionar tarefa' />
            <Button variant='default' className='cursor-pointer'><Plus /> Cadastrar</Button>
        </CardHeader>
  {/*final da header*/}

  {/*conteudo do card*/}
        <CardContent>

          <Separator className='mb-4'/> 
          <div className='flex gap-2 justify-left ml-4'> {/*badges*/}
            <Badge variant='default' className='cursor-pointer'> <List/> Todas</Badge>
            <Badge variant='outline' className='cursor-pointer'> <ArrowDownRight/> Não finalizadas</Badge>
            <Badge variant='outline' className='cursor-pointer'> <Check/> Concluidas</Badge>
          </div> {/*fim dos badges*/}

          <div className='mt-4'> {/*div pai das tarefas*/}

            <div className='h-14 flex justify-between items-center border rounded-sm mb-2'> {/*tarefas*/}
              <div className='w-1 h-full  bg-green-300 rounded-sm'></div>
              <p className='flex-1 px-2 text-md'>Estudar react</p>
              <div className='flex items-center gap-2 mr-2' >

                <Dialog>
                  <DialogTrigger>
                    <Pencil color='#FFC067' size={16} className='cursor-pointer'/>
                  </DialogTrigger>
                  <DialogContent>

                    <DialogHeader>
                      <DialogTitle className='text-sm'>Editar tarefa</DialogTitle>
                    </DialogHeader>

                    <div className='flex gap-2'>
                      <Input/>
                      <Button className='cursor-pointer'>Editar</Button>
                    </div>

                  </DialogContent>
                </Dialog>
                
                <Trash color='#FFC067' size={16} className='cursor-pointer'/>

              </div>
            </div> {/*fim das tarefas*/}

          </div>

          <div> {/*div pai do rodapê*/}

            <div className='flex justify-between mt-4'> {/*rodapé*/}
              <div className='flex gap-1 items-center'>
                <ListCheck size={14}/>  
                <p className='text-xs'>tarefas concluidas (3/3) </p>
              </div>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant='outline' className='text-xs h-6 cursor-pointer'><Trash />Limpar tarefas concluidas</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Tem certeza que deseja excluir x tarefas </AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogAction>Sim</AlertDialogAction>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            
            </div> {/*fim do rodapé*/}

            <div className='h-2 w-full bg-gray-200 rounded-md mt-4'> {/*barra de conclusão*/}
              <div className='h-full bg-green-500 rounded-sm' style={{ width: '50%' }}></div>
            </div>

            <div className='flex justify-end items-center gap-1 mt-2'>
              <Sigma size={14}/>
              <p className='text-xs'>tarefas no total: 3</p>
            </div>

          </div> 



        </CardContent> 
  {/*final do conteudo do card*/}
      </Card> {/*fim do card*/}
    </main>
  )
}

export default Home