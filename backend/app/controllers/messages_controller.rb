class MessagesController < ApplicationController
  before_action :set_message, only: [:show, :update, :destroy]
  before_action :authenticate_api_user!

  # GET /messages
  # GET /messages.json
  def index
    @messages = Message.all
    render 'index', :formats => [:json], :handlers => [:jbuilder]
  end

  # GET /messages/1
  # GET /messages/1.json
  def show
  end

  # POST /messages
  # POST /messages.json
  def create
    @message = Message.new(message_params)

    if @message.save
      render :show, status: :created, location: @message
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /messages/1
  # PATCH/PUT /messages/1.json
  def update
    if @message.update(message_params)
      render :show, status: :ok, location: @message
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  # DELETE /messages/1
  # DELETE /messages/1.json
  def destroy
    @message.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_message
      @message = Message.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def message_params
      params.require(:message).permit(:content)
    end
end
