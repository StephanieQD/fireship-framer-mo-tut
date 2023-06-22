import { motion, AnimatePresence } from "framer-motion";
import {useState} from 'react';
import Modal from "./components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [animType, setAnimType] = useState('dropIn');
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const handleChange = (e) => {
    setAnimType(e.target.value)
  }

  const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Eius laboriosam labore, totam expedita voluptates tempore asperiores sequi, alias cum veritatis, 
  minima dolor iste similique eos id. Porro, culpa? Officiis, placeat?`

  return (
    <div>
      <main>
      <h1 style={{textAlign: "center"}}>Framer Motion ⚛️ React</h1>

      <select className="input" onChange={handleChange}>
        <option value="dropIn">🪂 Drop in</option>
        <option value="flip">🛹 Flip</option>
        <option value="newspaper">🗞 Newspaper</option>
        <option value="badSuspension">🔩 Bad Suspension</option>
        <option value="fadeIn">💨 Fade In</option>
        <option value="roadRunner">🐦Road Runner</option>
      </select>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{scale: 0.9}}
        className="save-button"
        onClick={() => (modalOpen ? close() : open())}
      >
        Launch Modal
      </motion.button>

      <AnimatePresence
          // Disable any initial animations on children that
          // are present when the component is first rendered
          initial={false}
          // Only render one component at a time.
          // The exiting component will finish its exit
          // animation before entering component is rendered
          mode="wait"
          // Fires when all exiting nodes have completed animating out
          onExitComplete={() => null}
      >
        {modalOpen && <Modal modalOpen={modalOpen} type={animType} text={text} handleClose={close} />}
      </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
