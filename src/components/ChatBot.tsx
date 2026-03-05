import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  Loader2, 
  Calendar, 
  PhoneCall,
  Droplets
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// Initialize Gemini API
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

interface Message {
  role: 'user' | 'model';
  text: string;
}

const SYSTEM_INSTRUCTION = `
Você é o assistente inteligente da HIDRIX - Soluções Sustentáveis.
Sua missão é ajudar visitantes do site a entenderem como a HIDRIX pode otimizar a gestão de água em suas empresas.

PERSONA:
- Profissional, técnico, porém acessível.
- Focado em sustentabilidade, eficiência e economia.
- Linguagem tecnológica e inovadora.

OBJETIVOS:
1. Responder dúvidas sobre: Gestão inteligente de água, tratamento de efluentes, reuso de água, conformidade ambiental e redução de custos hídricos.
2. Qualificar o lead: Tente descobrir o nome do usuário, a empresa e qual o principal desafio hídrico que enfrentam.
3. Conversão: Se o usuário demonstrar interesse real ou se você já tiver coletado informações básicas, ofereça agendar um diagnóstico gratuito ou falar com um especialista.

DIRETRIZES:
- Se não souber algo específico sobre preços exatos, diga que um especialista pode fornecer um orçamento detalhado após um diagnóstico.
- Mantenha as respostas concisas e úteis.
- Use termos como "eficiência hídrica", "ESG", "ROI sustentável" e "tecnologia de monitoramento".
- Se o usuário quiser agendar, peça o WhatsApp ou e-mail para que a equipe entre em contato.
`;

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Olá! Sou o assistente inteligente da HIDRIX. Como posso ajudar sua empresa a otimizar a gestão de água hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const chatHistory = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash", // Using flash for speed in chat
        contents: [
          ...chatHistory,
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });

      const botResponse = response.text || "Desculpe, tive um problema técnico. Pode repetir?";
      setMessages(prev => [...prev, { role: 'model', text: botResponse }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Ocorreu um erro ao processar sua mensagem. Por favor, tente novamente em instantes." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white w-[350px] sm:w-[400px] h-[500px] rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-hidrix-blue p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <Droplets className="text-hidrix-green w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Hidrix AI</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[10px] opacity-70 uppercase tracking-widest font-bold">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-2 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-hidrix-green text-white' : 'bg-hidrix-blue text-white'}`}>
                      {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-hidrix-green text-white rounded-tr-none' 
                        : 'bg-white text-hidrix-deep border border-gray-100 rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-2 items-center bg-white p-3 rounded-2xl border border-gray-100 shadow-sm">
                    <Loader2 className="w-4 h-4 animate-spin text-hidrix-blue" />
                    <span className="text-xs text-gray-400 font-medium">Analisando...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar bg-white border-t border-gray-50">
              <button 
                onClick={() => setInput('Como reduzir custos com água?')}
                className="whitespace-nowrap px-3 py-1.5 bg-gray-100 hover:bg-hidrix-blue/5 text-hidrix-blue rounded-full text-xs font-bold transition-colors border border-gray-200"
              >
                Reduzir Custos
              </button>
              <button 
                onClick={() => setInput('Quero um diagnóstico gratuito')}
                className="whitespace-nowrap px-3 py-1.5 bg-gray-100 hover:bg-hidrix-blue/5 text-hidrix-blue rounded-full text-xs font-bold transition-colors border border-gray-200"
              >
                Diagnóstico
              </button>
              <button 
                onClick={() => setInput('Tratamento de efluentes')}
                className="whitespace-nowrap px-3 py-1.5 bg-gray-100 hover:bg-hidrix-blue/5 text-hidrix-blue rounded-full text-xs font-bold transition-colors border border-gray-200"
              >
                Efluentes
              </button>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="relative">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Digite sua mensagem..."
                  className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-hidrix-blue focus:ring-2 focus:ring-hidrix-blue/10 transition-all"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-hidrix-blue text-white rounded-lg hover:bg-hidrix-deep disabled:opacity-50 disabled:hover:bg-hidrix-blue transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-white text-hidrix-blue border border-gray-100' : 'bg-hidrix-blue text-white'
        }`}
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-hidrix-green rounded-full border-2 border-white flex items-center justify-center">
            <span className="w-2 h-2 bg-white rounded-full animate-ping" />
          </span>
        )}
      </motion.button>
    </div>
  );
};
